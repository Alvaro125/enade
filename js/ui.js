import { state, questionKey, isQuestionCorrect, calculateResults, formatTime } from './state.js';
import { diagrams } from './data/diagrams.js';

function renderDiagramIfAny(diagramId) {
  if (!diagramId || !diagrams[diagramId]) return '';
  return `<div class="diagram-box">${diagrams[diagramId]}</div>`;
}

export function renderSetup(root, hasSavedSession) {
  const c = state.config;
  root.innerHTML = `
    <section class="hero-card">
      <h1>Simulado ENADE — Sistemas de Informação</h1>
      <p>
        Pratique as questões objetivas oficiais das provas do ENADE (2017 e 2021) com gabarito definitivo,
        cartão-resposta interativo e cálculo de nota ponderada (25% Formação Geral + 75% Componente Específico).
        Na aba de <strong>Discursivas</strong>, consulte diretamente o padrão de resposta esperada pelo INEP.
      </p>

      ${
        hasSavedSession
          ? `<div style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
               <button class="btn btn-success" id="btn-resume">Continuar simulado em andamento</button>
               <button class="btn btn-secondary btn-sm" id="btn-discard">Descartar salvo</button>
             </div>`
          : ''
      }

      <div class="setup-grid">
        <div class="setup-box">
          <h2>1. Escolha a Prova <span class="tag">INEP</span></h2>
          <div class="option-group">
            <label class="radio-card">
              <input type="radio" name="examId" value="2021" ${c.examId === '2021' ? 'checked' : ''}>
              <span><strong>ENADE 2021</strong><small>35 questões objetivas (Q33 anulada)</small></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="examId" value="2017" ${c.examId === '2017' ? 'checked' : ''}>
              <span><strong>ENADE 2017</strong><small>35 questões objetivas (Q14 anulada)</small></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="examId" value="both" ${c.examId === 'both' ? 'checked' : ''}>
              <span><strong>Combinado (2017 + 2021)</strong><small>70 questões objetivas em sequência</small></span>
            </label>
          </div>
        </div>

        <div class="setup-box">
          <h2>2. Recorte da Prova <span class="tag">Pesos</span></h2>
          <div class="option-group">
            <label class="radio-card">
              <input type="radio" name="scope" value="all" ${c.scope === 'all' ? 'checked' : ''}>
              <span><strong>Prova Completa (Q1 a Q35)</strong><small>Formação Geral + Componente Específico</small></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="scope" value="fg" ${c.scope === 'fg' ? 'checked' : ''}>
              <span><strong>Somente Formação Geral (Q1 a Q8)</strong><small>Peso de 25% na nota final</small></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="scope" value="ce" ${c.scope === 'ce' ? 'checked' : ''}>
              <span><strong>Somente Componente Específico (Q9 a Q35)</strong><small>Peso de 75% na nota final</small></span>
            </label>
          </div>
        </div>

        <div class="setup-box">
          <h2>3. Modo de Correção <span class="tag">Estudo</span></h2>
          <div class="option-group">
            <label class="radio-card">
              <input type="radio" name="feedbackMode" value="end" ${c.feedbackMode === 'end' ? 'checked' : ''}>
              <span><strong>Modo Simulado</strong><small>Corrige tudo ao finalizar a prova</small></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="feedbackMode" value="immediate" ${c.feedbackMode === 'immediate' ? 'checked' : ''}>
              <span><strong>Modo Estudo (Feedback Imediato)</strong><small>Mostra o gabarito logo após marcar</small></span>
            </label>
            <label class="radio-card">
              <input type="checkbox" id="chk-timer" ${c.useTimer ? 'checked' : ''}>
              <span><strong>Cronômetro (4h oficiais)</strong><small>Contagem regressiva no topo da tela</small></span>
            </label>
          </div>
        </div>
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <button class="btn btn-primary" id="btn-start-exam">Iniciar Simulado Objetivo</button>
        <button class="btn btn-secondary" id="btn-go-discursivas">Ver Respostas Esperadas (Discursivas)</button>
      </div>
    </section>
  `;
}

export function renderExam(root) {
  const q = state.questions[state.currentIndex];
  if (!q) return;

  const key = questionKey(q);
  const selected = state.answers[key];
  const isFlagged = !!state.flagged[key];
  const showCorrection = state.submitted || (state.config.feedbackMode === 'immediate' && !!selected);

  const sectionLabel = q.section === 'FG' ? 'Formação Geral' : 'Componente Específico';

  root.innerHTML = `
    <div class="exam-layout">
      <article class="question-card">
        <div class="question-header">
          <div class="question-meta">
            <span class="question-title">ENADE ${q.year} — Questão ${String(q.number).padStart(2, '0')}</span>
            <span class="tag">${sectionLabel}</span>
            ${q.annulled ? '<span class="tag warning">ANULADA</span>' : ''}
          </div>
          <button class="btn btn-secondary btn-sm" id="btn-flag">
            ${isFlagged ? '★ Marcada para revisão' : '☆ Marcar para revisão'}
          </button>
        </div>

        <div class="question-body">
          ${q.bodyHtml}
          ${renderDiagramIfAny(q.diagram)}
          ${q.postDiagramHtml || ''}
        </div>

        ${
          q.annulled
            ? `<div class="annulled-banner" style="margin-top: 1rem;">
                 Esta questão foi ANULADA no gabarito definitivo oficial do INEP. Sua pontuação é atribuída automaticamente a todos os participantes.
               </div>`
            : ''
        }

        <div class="alternatives" role="radiogroup" aria-label="Alternativas">
          ${q.options
            .map((opt) => {
              const classes = ['alt-item'];
              if (selected === opt.letter) classes.push('selected');
              if (showCorrection && !q.annulled) {
                if (opt.letter === q.answer) classes.push('correct');
                else if (selected === opt.letter && opt.letter !== q.answer) classes.push('wrong');
              }
              const content = opt.diagram ? renderDiagramIfAny(opt.diagram) : opt.html;
              return `
                <button class="${classes.join(' ')}" data-letter="${opt.letter}" ${state.submitted ? 'disabled' : ''}>
                  <span class="alt-letter">${opt.letter}</span>
                  <div class="alt-content">${content}</div>
                </button>
              `;
            })
            .join('')}
        </div>

        ${
          showCorrection && !q.annulled
            ? `<div style="margin-top: 1rem; font-size: 0.9rem; font-weight: 600; color: ${
                selected === q.answer ? 'var(--success)' : 'var(--danger)'
              };">
                Gabarito oficial: Alternativa ${q.answer}
                ${selected ? (selected === q.answer ? ' — Você acertou!' : ` — Você marcou ${selected}.`) : ' — Não respondida.'}
               </div>`
            : ''
        }

        <div class="question-footer">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" id="btn-prev" ${state.currentIndex === 0 ? 'disabled' : ''}>
              ← Anterior
            </button>
            <button class="btn btn-secondary" id="btn-next" ${state.currentIndex === state.questions.length - 1 ? 'disabled' : ''}>
              Próxima →
            </button>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            ${
              state.submitted
                ? `<button class="btn btn-primary" id="btn-view-results">Ver Resumo do Desempenho</button>`
                : `<button class="btn btn-primary" id="btn-finish-exam">Finalizar e Corrigir</button>`
            }
          </div>
        </div>
      </article>

      <aside class="sidebar-card">
        <h3>
          <span>Cartão-Resposta</span>
          <small style="color: var(--text-muted); font-weight: 500;">
            ${Object.keys(state.answers).length}/${state.questions.length}
          </small>
        </h3>
        <div class="q-grid">
          ${state.questions
            .map((item, idx) => {
              const k = questionKey(item);
              const ans = state.answers[k];
              const cls = ['q-dot'];
              if (idx === state.currentIndex) cls.push('current');
              if (state.flagged[k]) cls.push('flagged');
              if (state.submitted || (state.config.feedbackMode === 'immediate' && ans)) {
                if (item.annulled) cls.push('annulled');
                else if (ans === item.answer) cls.push('correct');
                else if (ans) cls.push('wrong');
              } else if (ans) {
                cls.push('answered');
              }
              const label = state.config.examId === 'both' ? `${String(item.year).slice(-2)}-${item.number}` : item.number;
              return `<button class="${cls.join(' ')}" data-idx="${idx}" title="Questão ${item.number} (${item.year})">${label}</button>`;
            })
            .join('')}
        </div>

        <div class="legend">
          <span><i class="dot-swatch" style="background: var(--primary);"></i> Respondida</span>
          <span><i class="dot-swatch" style="background: #f59e0b;"></i> Revisão</span>
          <span><i class="dot-swatch" style="background: var(--success);"></i> Correta</span>
          <span><i class="dot-swatch" style="background: var(--danger);"></i> Errada</span>
        </div>

        <button class="btn btn-secondary btn-sm" style="width: 100%;" id="btn-back-setup">
          Trocar Prova / Configurações
        </button>
      </aside>
    </div>
  `;
}

export function renderResults(root) {
  const res = calculateResults(state.questions, state.answers);
  const fgPct = res.fgTotal ? ((res.fgCorrect / res.fgTotal) * 100).toFixed(1) : '—';
  const cePct = res.ceTotal ? ((res.ceCorrect / res.ceTotal) * 100).toFixed(1) : '—';

  root.innerHTML = `
    <section class="hero-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1>Resultado do Simulado</h1>
          <p>Confira seu desempenho geral e por componente curricular (com questões anuladas creditadas).</p>
        </div>
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-review-questions">Revisar Questões</button>
          <button class="btn btn-primary" id="btn-new-simulado">Novo Simulado</button>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <small>Acertos Totais</small>
          <strong>${res.totalCorrect} / ${res.total}</strong>
          <small>${res.rawPercent.toFixed(1)}% de aproveitamento bruto</small>
        </div>
        <div class="stat-card">
          <small>Nota Ponderada (Objetiva)</small>
          <strong>${res.weightedScore.toFixed(1)}</strong>
          <small>25% Formação Geral + 75% Específico</small>
        </div>
        <div class="stat-card">
          <small>Formação Geral (Q1–Q8)</small>
          <strong>${res.fgCorrect} / ${res.fgTotal}</strong>
          <small>${fgPct}% de acerto</small>
        </div>
        <div class="stat-card">
          <small>Componente Específico (Q9–Q35)</small>
          <strong>${res.ceCorrect} / ${res.ceTotal}</strong>
          <small>${cePct}% de acerto</small>
        </div>
      </div>

      <h2 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Mapa de Respostas</h2>
      <div class="q-grid" style="grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));">
        ${state.questions
          .map((q, idx) => {
            const k = questionKey(q);
            const ans = state.answers[k];
            const ok = isQuestionCorrect(q, ans);
            const cls = q.annulled ? 'annulled' : ok ? 'correct' : 'wrong';
            const sub = q.annulled ? 'ANUL' : `${ans || '—'}/${q.answer}`;
            return `
              <button class="q-dot ${cls}" data-review-idx="${idx}" style="height: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15;">
                <span>Q${q.number}</span>
                <small style="font-size: 0.68rem; opacity: 0.9;">${sub}</small>
              </button>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
}

export function renderDiscursivas(root, discursivas) {
  const filtered =
    state.discursivaFilter === 'all'
      ? discursivas
      : discursivas.filter((d) => String(d.year) === state.discursivaFilter);

  root.innerHTML = `
    <section class="hero-card" style="padding: 1.5rem;">
      <div class="filter-bar" style="margin-bottom: 0;">
        <div>
          <h1 style="font-size: 1.45rem;">Questões Discursivas — Resposta Esperada</h1>
          <p>Exibição direta do Padrão de Resposta oficial do INEP (ENADE 2017 e 2021).</p>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          <button class="btn btn-sm ${state.discursivaFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" data-disc-filter="all">Todas (${discursivas.length})</button>
          <button class="btn btn-sm ${state.discursivaFilter === '2021' ? 'btn-primary' : 'btn-secondary'}" data-disc-filter="2021">2021 (5)</button>
          <button class="btn btn-sm ${state.discursivaFilter === '2017' ? 'btn-primary' : 'btn-secondary'}" data-disc-filter="2017">2017 (5)</button>
        </div>
      </div>
    </section>

    <div class="discursiva-list">
      ${filtered
        .map(
          (d) => `
        <article class="discursiva-card">
          <div class="discursiva-head">
            <div class="question-meta">
              <span class="question-title">ENADE ${d.year} — Discursiva 0${d.number}</span>
              <span class="tag">${d.section === 'FG' ? 'Formação Geral' : 'Componente Específico'}</span>
            </div>
            <span class="tag success">${d.theme}</span>
          </div>

          <div class="expected-answer-box">
            <h4>Resposta Esperada (Padrão de Resposta INEP)</h4>
            ${d.expectedHtml}
            ${d.expectedDiagrams ? d.expectedDiagrams.map((id) => renderDiagramIfAny(id)).join('') : ''}
          </div>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

export function updateTimerDom(seconds) {
  const el = document.getElementById('timer-value');
  if (el) el.textContent = formatTime(seconds);
}
