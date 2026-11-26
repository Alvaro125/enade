import {
  state,
  questionKey,
  saveProgress,
  loadProgress,
  clearSavedExam,
  startTimer,
  stopTimer,
} from './state.js';
import {
  renderSetup,
  renderExam,
  renderResults,
  renderDiscursivas,
  renderMindMap,
  updateTimerDom,
} from './ui.js';
import { exam2017Objective, exam2017Discursivas } from './data/exam-2017.js';
import { exam2021Objective, exam2021Discursivas } from './data/exam-2021.js';
import { studyGuides } from './data/study-guides.js';

const root = document.getElementById('app-root');
const timerDisplay = document.getElementById('timer-display');
const navObjetivas = document.getElementById('nav-objetivas');
const navDiscursivas = document.getElementById('nav-discursivas');
const navMindmap = document.getElementById('nav-mindmap');
const btnTheme = document.getElementById('btn-theme');
const btnHome = document.getElementById('btn-home');

function buildQuestionList(config) {
  let pool = [];
  if (config.examId === '2017') pool = [...exam2017Objective];
  else if (config.examId === '2021') pool = [...exam2021Objective];
  else pool = [...exam2017Objective, ...exam2021Objective];

  if (config.scope === 'fg') pool = pool.filter((q) => q.section === 'FG');
  else if (config.scope === 'ce') pool = pool.filter((q) => q.section === 'CE');

  if (config.areaFilter && config.areaFilter !== 'all') {
    pool = pool.filter((q) => studyGuides[questionKey(q)]?.area === config.areaFilter);
  }

  return pool;
}

function getAllDiscursivas() {
  return [...exam2021Discursivas, ...exam2017Discursivas];
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  btnTheme.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function syncTopbar() {
  navObjetivas.classList.toggle('active', state.mode === 'objetivas');
  navDiscursivas.classList.toggle('active', state.mode === 'discursivas');
  navMindmap.classList.toggle('active', state.mode === 'mindmap');

  const showTimer =
    state.mode === 'objetivas' &&
    state.view === 'exam' &&
    state.config.useTimer &&
    !state.submitted;
  timerDisplay.classList.toggle('hidden', !showTimer);
  if (showTimer) updateTimerDom(state.timerSeconds);
}

function render() {
  syncTopbar();
  if (state.mode === 'discursivas') {
    stopTimer();
    renderDiscursivas(root, getAllDiscursivas());
    return;
  }
  if (state.mode === 'mindmap') {
    stopTimer();
    renderMindMap(root);
    return;
  }

  if (state.view === 'setup') {
    stopTimer();
    const saved = loadProgress();
    const hasSaved = !!(saved && saved.view === 'exam' && Object.keys(saved.answers || {}).length > 0);
    renderSetup(root, hasSaved);
  } else if (state.view === 'exam') {
    renderExam(root);
    startTimer(
      (sec) => updateTimerDom(sec),
      () => finishExam()
    );
  } else if (state.view === 'results') {
    stopTimer();
    renderResults(root);
  }
}

function startNewExam() {
  const list = buildQuestionList(state.config);
  if (list.length === 0) {
    alert('Nenhuma questão encontrada para a combinação de recorte e área selecionada. Tente alterar para "Prova Completa".');
    return;
  }
  clearSavedExam();
  state.questions = list;
  state.view = 'exam';
  saveProgress();
  render();
}

function finishExam() {
  state.submitted = true;
  state.view = 'results';
  stopTimer();
  saveProgress();
  render();
}

// Event delegation on root
root.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.id === 'btn-start-exam') {
    startNewExam();
  } else if (target.id === 'btn-go-discursivas') {
    state.mode = 'discursivas';
    render();
  } else if (target.id === 'btn-resume') {
    const saved = loadProgress();
    if (saved) {
      state.config = saved.config || state.config;
      state.answers = saved.answers || {};
      state.flagged = saved.flagged || {};
      state.currentIndex = saved.currentIndex || 0;
      state.submitted = !!saved.submitted;
      state.timerSeconds = saved.timerSeconds ?? 4 * 3600;
      state.questions = buildQuestionList(state.config);
      state.view = 'exam';
      render();
    }
  } else if (target.id === 'btn-discard') {
    clearSavedExam();
    render();
  } else if (target.dataset.letter) {
    if (state.submitted) return;
    const q = state.questions[state.currentIndex];
    const key = questionKey(q);
    state.answers[key] = target.dataset.letter;
    saveProgress();
    render();
  } else if (target.id === 'btn-flag') {
    const q = state.questions[state.currentIndex];
    const key = questionKey(q);
    if (state.flagged[key]) delete state.flagged[key];
    else state.flagged[key] = true;
    saveProgress();
    render();
  } else if (target.id === 'btn-prev') {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      saveProgress();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else if (target.id === 'btn-next') {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      saveProgress();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else if (target.dataset.idx !== undefined) {
    state.currentIndex = Number(target.dataset.idx);
    saveProgress();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (target.id === 'btn-finish-exam') {
    const unanswered = state.questions.length - Object.keys(state.answers).length;
    if (unanswered > 0) {
      const ok = confirm(`Você ainda tem ${unanswered} questão(ões) sem resposta. Deseja finalizar e corrigir mesmo assim?`);
      if (!ok) return;
    }
    finishExam();
  } else if (target.id === 'btn-view-results') {
    state.view = 'results';
    render();
  } else if (target.id === 'btn-review-questions') {
    state.view = 'exam';
    state.currentIndex = 0;
    render();
  } else if (target.id === 'btn-new-simulado' || target.id === 'btn-back-setup') {
    state.view = 'setup';
    render();
  } else if (target.dataset.reviewIdx !== undefined) {
    state.currentIndex = Number(target.dataset.reviewIdx);
    state.view = 'exam';
    render();
  } else if (target.dataset.discFilter) {
    state.discursivaFilter = target.dataset.discFilter;
    render();
  } else if (target.id === 'btn-mm-expand') {
    root.querySelectorAll('.mm-node').forEach((d) => { d.open = true; });
  } else if (target.id === 'btn-mm-collapse') {
    root.querySelectorAll('.mm-node').forEach((d) => { d.open = false; });
  } else if (target.dataset.practiceArea) {
    state.config.examId = 'both';
    state.config.scope = 'all';
    state.config.areaFilter = target.dataset.practiceArea;
    state.config.feedbackMode = 'immediate';
    state.mode = 'objetivas';
    startNewExam();
  }
});

root.addEventListener('change', (e) => {
  const el = e.target;
  if (el.name === 'examId') state.config.examId = el.value;
  else if (el.name === 'scope') state.config.scope = el.value;
  else if (el.id === 'sel-area') state.config.areaFilter = el.value;
  else if (el.name === 'feedbackMode') state.config.feedbackMode = el.value;
  else if (el.id === 'chk-timer') state.config.useTimer = el.checked;
});

root.addEventListener('input', (e) => {
  if (e.target.id === 'mindmap-search') {
    const pos = e.target.selectionStart;
    state.mindmapSearch = e.target.value;
    renderMindMap(root);
    const input = document.getElementById('mindmap-search');
    if (input) {
      input.focus();
      input.setSelectionRange(pos, pos);
    }
  }
});

navObjetivas.addEventListener('click', () => {
  state.mode = 'objetivas';
  render();
});

navDiscursivas.addEventListener('click', () => {
  state.mode = 'discursivas';
  render();
});

navMindmap.addEventListener('click', () => {
  state.mode = 'mindmap';
  render();
});

btnHome.addEventListener('click', () => {
  state.mode = 'objetivas';
  state.view = 'setup';
  render();
});

btnTheme.addEventListener('click', () => {
  const next = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveProgress();
});

document.addEventListener('keydown', (e) => {
  if (state.mode !== 'objetivas' || state.view !== 'exam') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
    state.currentIndex--;
    saveProgress();
    render();
  } else if (e.key === 'ArrowRight' && state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    saveProgress();
    render();
  } else if (!state.submitted) {
    const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' };
    const letter = map[e.key.toLowerCase()];
    if (letter) {
      const q = state.questions[state.currentIndex];
      state.answers[questionKey(q)] = letter;
      saveProgress();
      render();
    }
  }
});

// Init
const saved = loadProgress();
if (saved?.theme) applyTheme(saved.theme);
else applyTheme('light');

render();
