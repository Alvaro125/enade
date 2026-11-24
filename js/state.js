const STORAGE_KEY = 'enade_si_simulado_v1';

export const state = {
  mode: 'objetivas', // 'objetivas' | 'discursivas'
  view: 'setup', // 'setup' | 'exam' | 'results'
  config: {
    examId: '2021', // '2017' | '2021' | 'both'
    scope: 'all', // 'all' | 'fg' | 'ce'
    feedbackMode: 'end', // 'end' | 'immediate'
    useTimer: true,
  },
  questions: [],
  currentIndex: 0,
  answers: {}, // { [qKey]: 'A' | 'B' | 'C' | 'D' | 'E' }
  flagged: {}, // { [qKey]: true }
  submitted: false,
  timerSeconds: 4 * 3600,
  timerInterval: null,
  discursivaFilter: 'all', // 'all' | '2017' | '2021'
  theme: 'light',
};

export function questionKey(q) {
  return `${q.year}-Q${q.number}`;
}

export function isQuestionCorrect(q, selected) {
  if (q.annulled) return true;
  if (!selected) return false;
  return selected === q.answer;
}

export function calculateResults(questions, answers) {
  let totalCorrect = 0;
  let fgTotal = 0;
  let fgCorrect = 0;
  let ceTotal = 0;
  let ceCorrect = 0;
  let answeredCount = 0;
  let annulledCount = 0;

  for (const q of questions) {
    const key = questionKey(q);
    const sel = answers[key];
    if (sel) answeredCount++;
    if (q.annulled) annulledCount++;

    const ok = isQuestionCorrect(q, sel);
    if (ok) totalCorrect++;

    if (q.section === 'FG') {
      fgTotal++;
      if (ok) fgCorrect++;
    } else {
      ceTotal++;
      if (ok) ceCorrect++;
    }
  }

  let weightedScore = 0;
  if (fgTotal > 0 && ceTotal > 0) {
    const fgPct = (fgCorrect / fgTotal) * 100;
    const cePct = (ceCorrect / ceTotal) * 100;
    weightedScore = 0.25 * fgPct + 0.75 * cePct;
  } else if (questions.length > 0) {
    weightedScore = (totalCorrect / questions.length) * 100;
  }

  return {
    total: questions.length,
    totalCorrect,
    answeredCount,
    annulledCount,
    fgTotal,
    fgCorrect,
    ceTotal,
    ceCorrect,
    rawPercent: questions.length ? (totalCorrect / questions.length) * 100 : 0,
    weightedScore,
  };
}

export function saveProgress() {
  try {
    const payload = {
      config: state.config,
      answers: state.answers,
      flagged: state.flagged,
      currentIndex: state.currentIndex,
      submitted: state.submitted,
      view: state.view,
      timerSeconds: state.timerSeconds,
      theme: state.theme,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage quota errors
  }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSavedExam() {
  state.answers = {};
  state.flagged = {};
  state.currentIndex = 0;
  state.submitted = false;
  state.timerSeconds = 4 * 3600;
  stopTimer();
  saveProgress();
}

export function formatTime(sec) {
  const s = Math.max(0, sec);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const rem = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${rem}`;
}

export function startTimer(onTick, onExpire) {
  stopTimer();
  if (!state.config.useTimer || state.submitted) return;
  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      onTick(state.timerSeconds);
      if (state.timerSeconds % 10 === 0) saveProgress();
    } else {
      stopTimer();
      onExpire();
    }
  }, 1000);
}

export function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}
