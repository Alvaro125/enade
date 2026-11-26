import { state, questionKey, isQuestionCorrect, calculateResults, formatTime } from './state.js';
import { diagrams } from './data/diagrams.js';
import { studyGuides, getAvailableAreas } from './data/study-guides.js';
import { enade2026Info, mindMapBranches } from './data/mindmap-2026.js';

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
            <div style="margin-top: 0.25rem;">
              <label for="sel-area" style="display:block; font-size:0.8rem; font-weight:600; color:var(--text-muted); margin-bottom:0.3rem;">
                Filtrar por Área de Conhecimento (opcional):
              </label>
              <select id="sel-area" class="select-input">
                <option value="all" ${c.areaFilter === 'all' ? 'selected' : ''}>Todas as áreas</option>
                ${getAvailableAreas()
                  .map((area) => `<option value="${area}" ${c.areaFilter === area ? 'selected' : ''}>${area}</option>`)
                  .join('')}
              </select>
            </div>
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
  const isStudyView = state.config.feedbackMode === 'immediate' || state.submitted;
  const guide = studyGuides[key];

  const sectionLabel = q.section === 'FG' ? 'Formação Geral' : 'Componente Específico';

  const renderStudyPanel = () => {
    if (!guide || !isStudyView) return '';

    if (!showCorrection) {
      return `
        <details class="study-preview-box">
          <summary>📚 Prévia do Conteúdo — ${guide.topic}</summary>
          <div class="study-concept-body">${guide.previewHtml}</div>
        </details>
      `;
    }

    const wrongLetters = q.options
      .map((o) => o.letter)
      .filter((l) => l !== q.answer && guide.wrongReasons?.[l]);

    return `
      <section class="study-panel" aria-label="Sistema de Estudos">
        <div class="study-panel-header">
          <span class="tag accent">${guide.area}</span>
          <strong>${guide.topic}</strong>
        </div>

        ${
          selected && !q.annulled && selected !== q.answer && guide.wrongReasons?.[selected]
            ? `<div class="study-wrong-box">
                 <strong>Por que a alternativa ${selected} está incorreta:</strong>
                 <p>${guide.wrongReasons[selected]}</p>
               </div>`
            : ''
        }

        <div class="study-correct-box">
          <strong>${q.annulled ? 'Sobre a anulação:' : `Por que a alternativa ${q.answer} é a correta:`}</strong>
          <p>${guide.whyCorrect}</p>
        </div>

        <div class="study-concept-box">
          <strong>📚 Prévia do Conteúdo:</strong>
          ${guide.previewHtml}
        </div>

        ${
          !q.annulled && wrongLetters.length > 0
            ? `<details class="study-others-details">
                 <summary>Ver por que as demais alternativas estão erradas</summary>
                 <ul class="study-others-list">
                   ${wrongLetters
                     .map((l) => `<li><strong>${l}:</strong> ${guide.wrongReasons[l]}</li>`)
                     .join('')}
                 </ul>
               </details>`
            : ''
        }
      </section>
    `;
  };

  root.innerHTML = `
    <div class="exam-layout">
      <article class="question-card">
        <div class="question-header">
          <div class="question-meta">
            <span class="question-title">ENADE ${q.year} — Questão ${String(q.number).padStart(2, '0')}</span>
            <span class="tag">${sectionLabel}</span>
            ${isStudyView && guide ? `<span class="tag accent">${guide.area}</span>` : ''}
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

        ${renderStudyPanel()}

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

export function renderMindMap(root) {
  const q = (state.mindmapSearch || '').trim().toLowerCase();

  const matchesQuery = (node) => {
    if (!q) return true;
    return (
      node.title.toLowerCase().includes(q) ||
      node.summary.toLowerCase().includes(q) ||
      node.examTip.toLowerCase().includes(q) ||
      (node.detailsHtml || '').toLowerCase().includes(q) ||
      node.topics.some((t) => t.toLowerCase().includes(q))
    );
  };

  const filteredBranches = mindMapBranches
    .map((branch) => ({
      ...branch,
      nodes: branch.nodes.filter(matchesQuery),
    }))
    .filter((b) => b.nodes.length > 0);

  root.innerHTML = `
    <section class="hero-card" style="padding: 1.5rem;">
      <div class="mm-header">
        <div>
          <h1>Mapa Mental — ${enade2026Info.title}</h1>
          <p>
            Estrutura de estudos e revisões baseada nas diretrizes oficiais do <strong>ENADE 2026</strong>:
            ${enade2026Info.structure.fg} + ${enade2026Info.structure.ce} (${enade2026Info.structure.duration}).
          </p>
        </div>
        <div class="mm-normatives">
          ${enade2026Info.normatives.map((n) => `<span class="tag">${n}</span>`).join('')}
        </div>
      </div>

      <div class="mm-competencies">
        ${enade2026Info.competencies
          .map(
            (c) => `
          <div class="mm-comp-card">
            <strong>${c.id}</strong>
            <p>${c.text}</p>
          </div>`
          )
          .join('')}
      </div>

      <div class="mm-toolbar">
        <input
          type="search"
          id="mindmap-search"
          class="select-input mm-search"
          placeholder="Buscar tópico, palavra-chave ou tecnologia (ex.: UML, SQL, COBIT, TTL, PMBOK)..."
          value="${state.mindmapSearch.replace(/"/g, '&quot;')}"
        >
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" id="btn-mm-expand">Expandir tudo</button>
          <button class="btn btn-secondary btn-sm" id="btn-mm-collapse">Recolher tudo</button>
        </div>
      </div>
    </section>

    <div class="mm-root-banner">
      <span>🧠 Núcleo Central: <strong>ENADE 2026 — Sistemas de Informação (20 Objetos de Conhecimento + Formação Geral)</strong></span>
    </div>

    <div class="mm-branches">
      ${
        filteredBranches.length === 0
          ? `<div class="hero-card"><p>Nenhum tópico encontrado para "<strong>${state.mindmapSearch}</strong>".</p></div>`
          : filteredBranches
              .map(
                (branch) => `
          <section class="mm-branch" style="--branch-color: ${branch.color};">
            <div class="mm-branch-head">
              <div>
                <h2>${branch.title}</h2>
                <small>${branch.subtitle}</small>
              </div>
              <span class="tag">${branch.nodes.length} tópico(s)</span>
            </div>

            <div class="mm-nodes">
              ${branch.nodes
                .map(
                  (node) => `
                <details class="mm-node" ${q ? 'open' : ''}>
                  <summary>
                    <span class="mm-node-title">${node.title}</span>
                    <span class="tag accent">${node.relatedArea}</span>
                  </summary>
                  <div class="mm-node-body">
                    <p class="mm-node-summary">${node.summary}</p>
                    <ul class="mm-topics">
                      ${node.topics.map((t) => `<li>${t}</li>`).join('')}
                    </ul>
                    ${
                      node.detailsHtml
                        ? `<div class="mm-details">
                             <strong>📖 Detalhamento para Estudo:</strong>
                             ${node.detailsHtml}
                           </div>`
                        : ''
                    }
                    <div class="mm-tip">
                      <strong>💡 Dica de Revisão:</strong> ${node.examTip}
                    </div>
                    ${
                      node.resources?.length
                        ? `<div class="mm-resources">
                             <strong>🔗 Links de Estudo:</strong>
                             <div class="mm-resource-links">
                               ${node.resources
                                 .map(
                                   (r) =>
                                     `<a class="mm-link-pill" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label} ↗</a>`
                                 )
                                 .join('')}
                             </div>
                           </div>`
                        : ''
                    }
                    <div style="display:flex; justify-content:flex-end;">
                      <button class="btn btn-primary btn-sm" data-practice-area="${node.relatedArea}">
                        Praticar questões desta área →
                      </button>
                    </div>
                  </div>
                </details>
              `
                )
                .join('')}
            </div>
          </section>
        `
              )
              .join('')
      }
    </div>
  `;
}

export function updateTimerDom(seconds) {
  const el = document.getElementById('timer-value');
  if (el) el.textContent = formatTime(seconds);
}
