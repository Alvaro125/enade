export const diagrams = {
  '2017-q01': `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; width:100%;">
      <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="18" font-size="11" font-weight="bold" fill="currentColor">Contribuições para a UE (2014, € bilhões)</text>
        <line x1="35" y1="30" x2="35" y2="155" stroke="currentColor" stroke-width="1"/>
        <line x1="35" y1="155" x2="365" y2="155" stroke="currentColor" stroke-width="1"/>
        <text x="12" y="158" font-size="9" fill="currentColor">0</text>
        <text x="8" y="133" font-size="9" fill="currentColor">10</text>
        <text x="8" y="108" font-size="9" fill="currentColor">20</text>
        <text x="8" y="83" font-size="9" fill="currentColor">30</text>
        <text x="8" y="58" font-size="9" fill="currentColor">40</text>
        <text x="8" y="35" font-size="9" fill="currentColor">50</text>
        <!-- Bars: scale 2.5px per billion -->
        <rect x="44" y="90.5" width="16" height="64.5" fill="#dc2626"/><text x="42" y="87" font-size="8" fill="currentColor">25,8</text>
        <rect x="70" y="106.2" width="16" height="48.8" fill="#dc2626"/><text x="68" y="102" font-size="8" fill="currentColor">19,5</text>
        <rect x="96" y="119.2" width="16" height="35.8" fill="#dc2626"/><text x="94" y="115" font-size="8" fill="currentColor">14,3</text>
        <rect x="122" y="126.7" width="16" height="28.3" fill="#dc2626"/><text x="120" y="122" font-size="8" fill="currentColor">11,3</text>
        <rect x="148" y="130.2" width="16" height="24.8" fill="#dc2626"/><text x="148" y="126" font-size="8" fill="currentColor">9,9</text>
        <rect x="174" y="139.2" width="16" height="15.8" fill="#dc2626"/><text x="174" y="135" font-size="8" fill="currentColor">6,3</text>
        <rect x="200" y="145.5" width="16" height="9.5" fill="#dc2626"/><text x="200" y="141" font-size="8" fill="currentColor">3,8</text>
        <rect x="226" y="146" width="16" height="9" fill="#dc2626"/><text x="226" y="142" font-size="8" fill="currentColor">3,6</text>
        <rect x="252" y="146.2" width="16" height="8.8" fill="#dc2626"/><text x="252" y="142" font-size="8" fill="currentColor">3,5</text>
        <rect x="278" y="148.5" width="16" height="6.5" fill="#dc2626"/><text x="278" y="144" font-size="8" fill="currentColor">2,6</text>
        <rect x="304" y="149.5" width="16" height="5.5" fill="#dc2626"/><text x="304" y="145" font-size="8" fill="currentColor">2,2</text>
        <rect x="330" y="49.7" width="16" height="105.3" fill="#64748b"/><text x="327" y="45" font-size="8" fill="currentColor">42,1</text>
        <g font-size="7.5" fill="currentColor">
          <text transform="translate(55,162) rotate(90)">Alemanha</text>
          <text transform="translate(81,162) rotate(90)">França</text>
          <text transform="translate(107,162) rotate(90)">Itália</text>
          <text transform="translate(133,162) rotate(90)">Reino Unido</text>
          <text transform="translate(159,162) rotate(90)">Espanha</text>
          <text transform="translate(185,162) rotate(90)">Holanda</text>
          <text transform="translate(211,162) rotate(90)">Suécia</text>
          <text transform="translate(237,162) rotate(90)">Bélgica</text>
          <text transform="translate(263,162) rotate(90)">Polônia</text>
          <text transform="translate(289,162) rotate(90)">Áustria</text>
          <text transform="translate(315,162) rotate(90)">Dinamarca</text>
          <text transform="translate(341,162) rotate(90)">Outros países</text>
        </g>
      </svg>
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="18" font-size="11" font-weight="bold" fill="currentColor">Reino Unido e UE (2014, € bilhões)</text>
        <line x1="35" y1="35" x2="35" y2="145" stroke="currentColor" stroke-width="1"/>
        <line x1="35" y1="145" x2="230" y2="145" stroke="currentColor" stroke-width="1"/>
        <text x="15" y="148" font-size="9" fill="currentColor">0</text>
        <text x="15" y="112" font-size="9" fill="currentColor">5</text>
        <text x="10" y="75" font-size="9" fill="currentColor">10</text>
        <text x="10" y="40" font-size="9" fill="currentColor">15</text>
        <rect x="65" y="62" width="45" height="83" fill="#0284c7"/>
        <text x="78" y="57" font-size="10" font-weight="bold" fill="currentColor">11,3</text>
        <rect x="145" y="94" width="45" height="51" fill="#eab308"/>
        <text x="160" y="89" font-size="10" font-weight="bold" fill="currentColor">6,9</text>
        <rect x="35" y="160" width="12" height="12" fill="#0284c7"/>
        <text x="52" y="170" font-size="9" fill="currentColor">Contribuição do Reino Unido com a UE</text>
        <rect x="35" y="178" width="12" height="12" fill="#eab308"/>
        <text x="52" y="188" font-size="9" fill="currentColor">Gasto da UE com o Reino Unido</text>
      </svg>
    </div>
  `,

  '2017-q03': `
    <table class="data-table center">
      <thead>
        <tr><th>Aparelho</th><th>Potência (kW)</th><th>Tempo de uso diário (h)</th><th>kWh</th></tr>
      </thead>
      <tbody>
        <tr><td>Carregador de celular</td><td>0,010</td><td>24</td><td>0,240</td></tr>
        <tr><td>Chuveiro 3 500 W</td><td>3,500</td><td>0,5</td><td>1,750</td></tr>
        <tr><td>Chuveiro 5 500 W</td><td>5,500</td><td>0,5</td><td>2,250</td></tr>
        <tr><td>Lâmpada de LED</td><td>0,008</td><td>5</td><td>0,040</td></tr>
        <tr><td>Lâmpada fluorescente</td><td>0,015</td><td>5</td><td>0,075</td></tr>
        <tr><td>Lâmpada incandescente</td><td>0,060</td><td>5</td><td>0,300</td></tr>
        <tr><td>Modem de internet em stand-by</td><td>0,005</td><td>24</td><td>0,120</td></tr>
        <tr><td>Modem de internet em uso</td><td>0,012</td><td>8</td><td>0,096</td></tr>
      </tbody>
    </table>
  `,

  '2017-q08': `
    <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">
      <rect x="190" y="8" width="80" height="32" rx="5" fill="#1e3a8a"/>
      <text x="230" y="22" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">17 PARCERIAS</text>
      <text x="230" y="33" text-anchor="middle" font-size="7" fill="#fff">EM PROL DAS METAS</text>
      <rect x="175" y="55" width="110" height="34" rx="17" fill="#f59e0b" opacity="0.25" stroke="#f59e0b"/>
      <text x="230" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">ECONOMIA (8, 9, 10, 12)</text>
      <rect x="155" y="102" width="150" height="38" rx="19" fill="#ef4444" opacity="0.22" stroke="#ef4444"/>
      <text x="230" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">SOCIEDADE (1, 2, 3, 4, 5, 7, 11, 16)</text>
      <rect x="130" y="153" width="200" height="44" rx="22" fill="#10b981" opacity="0.22" stroke="#10b981"/>
      <text x="230" y="179" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">BIOSFERA (6, 13, 14, 15)</text>
    </svg>
  `,

  '2017-q11': `
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Obra -->
      <rect x="110" y="70" width="90" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="155" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Obra</text>
      <text x="105" y="25" font-size="9" fill="currentColor">dimensões</text>
      <text x="118" y="38" font-size="9" fill="currentColor">data de aquisição</text>
      <text x="132" y="51" font-size="9" fill="currentColor">título</text>
      <text x="148" y="64" font-size="9" font-weight="bold" fill="currentColor">● código</text>
      <!-- Artista -->
      <rect x="330" y="70" width="90" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="375" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Artista</text>
      <text x="345" y="30" font-size="9" fill="currentColor">nacionalidade</text>
      <text x="360" y="45" font-size="9" fill="currentColor">nome</text>
      <text x="375" y="60" font-size="9" font-weight="bold" fill="currentColor">● código</text>
      <!-- criar -->
      <polygon points="265,75 295,90 265,105 235,90" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="265" y="94" text-anchor="middle" font-size="10" fill="currentColor">criar</text>
      <line x1="200" y1="90" x2="235" y2="90" stroke="currentColor"/>
      <line x1="295" y1="90" x2="330" y2="90" stroke="currentColor"/>
      <text x="208" y="85" font-size="10" fill="currentColor">(1,n)</text>
      <text x="302" y="85" font-size="10" fill="currentColor">(1,1)</text>
      <!-- Especialização -->
      <line x1="155" y1="110" x2="155" y2="145" stroke="currentColor"/>
      <polygon points="155,145 143,165 167,165" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="95" y1="185" x2="215" y2="185" stroke="currentColor"/>
      <line x1="155" y1="165" x2="155" y2="185" stroke="currentColor"/>
      <line x1="95" y1="185" x2="95" y2="210" stroke="currentColor"/>
      <line x1="215" y1="185" x2="215" y2="210" stroke="currentColor"/>
      <rect x="55" y="210" width="80" height="35" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="95" y="232" text-anchor="middle" font-size="11" fill="currentColor">Pintura</text>
      <text x="20" y="265" font-size="9" fill="currentColor">tipo de tinta ○</text>
      <rect x="175" y="210" width="80" height="35" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="215" y="232" text-anchor="middle" font-size="11" fill="currentColor">Escultura</text>
      <text x="220" y="265" font-size="9" fill="currentColor">○ material</text>
      <!-- dominar -->
      <line x1="375" y1="110" x2="375" y2="145" stroke="currentColor"/>
      <text x="383" y="130" font-size="10" fill="currentColor">(1,n)</text>
      <polygon points="375,145 405,165 375,185 345,165" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="375" y="169" text-anchor="middle" font-size="10" fill="currentColor">dominar</text>
      <line x1="375" y1="185" x2="375" y2="215" stroke="currentColor"/>
      <text x="383" y="205" font-size="10" fill="currentColor">(1,n)</text>
      <rect x="335" y="215" width="80" height="35" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="375" y="237" text-anchor="middle" font-size="11" fill="currentColor">Técnica</text>
      <text x="385" y="270" font-size="9" font-weight="bold" fill="currentColor">● código</text>
      <text x="355" y="285" font-size="9" fill="currentColor">○ descrição</text>
    </svg>
  `,

  '2017-q13': `
    <table class="data-table">
      <thead>
        <tr><th colspan="5">Processos de Apoio (transversais → Vantagem Competitiva)</th></tr>
      </thead>
      <tbody>
        <tr><td colspan="5"><strong>Coordenação administrativa e serviços de apoio:</strong> Intranet de fluxo de trabalho colaborativo</td></tr>
        <tr><td colspan="5"><strong>Gerenciamento de recursos humanos:</strong> Intranet de benefícios de funcionários</td></tr>
        <tr><td colspan="5"><strong>Desenvolvimento tecnológico:</strong> Extranet de desenvolvimento de produtos com parceiros</td></tr>
        <tr><td colspan="5"><strong>Obtenção de recursos:</strong> Portais de e-commerce para fornecedores</td></tr>
      </tbody>
      <thead>
        <tr><th colspan="5">Processos de Negócio Primários</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Logística de entrada</strong><br><small>Armazenamento automatizado just-in-time</small></td>
          <td><strong>Operações</strong><br><small>Produção flexível apoiada por computador</small></td>
          <td><strong>Logística de saída</strong><br><small>Pontos de venda e processamento de pedidos on-line</small></td>
          <td><strong>Marketing e vendas</strong><br><small>Marketing direcionado</small></td>
          <td><strong>Atendimento ao cliente</strong><br><small>Gestão do relacionamento com o cliente</small></td>
        </tr>
      </tbody>
    </table>
  `,

  '2017-q17': `
    <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
      <text x="190" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Frequência mensal de defeitos do aplicativo</text>
      <line x1="45" y1="30" x2="45" y2="160" stroke="currentColor"/>
      <line x1="45" y1="160" x2="355" y2="160" stroke="currentColor"/>
      <text x="28" y="163" font-size="9" fill="currentColor">0</text>
      <text x="28" y="131" font-size="9" fill="currentColor">5</text>
      <text x="22" y="98" font-size="9" fill="currentColor">10</text>
      <text x="22" y="66" font-size="9" fill="currentColor">15</text>
      <text x="22" y="34" font-size="9" fill="currentColor">20</text>
      <!-- 130px = 20 defects => 6.5px each -->
      <rect x="65" y="153.5" width="16" height="6.5" fill="#38bdf8" stroke="currentColor"/>
      <rect x="115" y="153.5" width="16" height="6.5" fill="#38bdf8" stroke="currentColor"/>
      <rect x="165" y="153.5" width="16" height="6.5" fill="#38bdf8" stroke="currentColor"/>
      <rect x="215" y="147" width="16" height="13" fill="#38bdf8" stroke="currentColor"/>
      <rect x="265" y="75.5" width="16" height="84.5" fill="#38bdf8" stroke="currentColor"/>
      <rect x="315" y="30" width="16" height="130" fill="#38bdf8" stroke="currentColor"/>
      <text x="70" y="175" font-size="10" fill="currentColor">1</text>
      <text x="120" y="175" font-size="10" fill="currentColor">2</text>
      <text x="170" y="175" font-size="10" fill="currentColor">3</text>
      <text x="220" y="175" font-size="10" fill="currentColor">4</text>
      <text x="270" y="175" font-size="10" fill="currentColor">5</text>
      <text x="320" y="175" font-size="10" fill="currentColor">6</text>
      <text x="195" y="192" text-anchor="middle" font-size="10" fill="currentColor">Mês</text>
    </svg>
  `,

  '2017-q19': `
    <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="115" y1="35" x2="185" y2="75" stroke="currentColor" stroke-width="1.5"/>
      <line x1="185" y1="75" x2="290" y2="65" stroke="currentColor" stroke-width="1.5"/>
      <line x1="185" y1="75" x2="75" y2="105" stroke="currentColor" stroke-width="1.5"/>
      <line x1="75" y1="105" x2="175" y2="145" stroke="currentColor" stroke-width="1.5"/>
      <line x1="175" y1="145" x2="290" y2="65" stroke="currentColor" stroke-width="1.5"/>
      <ellipse cx="115" cy="35" rx="45" ry="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="115" y="39" text-anchor="middle" font-size="11" fill="currentColor">Brasília</text>
      <ellipse cx="185" cy="75" rx="48" ry="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="185" y="79" text-anchor="middle" font-size="11" fill="currentColor">São Paulo</text>
      <ellipse cx="295" cy="65" rx="58" ry="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="295" y="69" text-anchor="middle" font-size="11" fill="currentColor">Rio de Janeiro</text>
      <ellipse cx="75" cy="105" rx="45" ry="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="75" y="109" text-anchor="middle" font-size="11" fill="currentColor">Curitiba</text>
      <ellipse cx="175" cy="145" rx="55" ry="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="175" y="149" text-anchor="middle" font-size="11" fill="currentColor">Porto Alegre</text>
    </svg>
  `,

  '2017-q21': `
    <div class="code-block" style="font-family: var(--font-sans);">
      <strong>Diagrama de Atividades UML — Fluxo por Raias:</strong><br>
      1. <em>Empresa que precisa do transporte:</em> Estado inicial → <strong>Informar origem, destino e tipo de carga</strong>.<br>
      2. <em>Aplicativo:</em> <strong>Verificar veículos disponíveis</strong> → [Ponto de decisão 1]: se não há veículos → Estado final; se <code>[há veículos disponíveis]</code> → executa em paralelo (fork) <strong>Verificar rota e destinos</strong> (Ponto de decisão 2) e <strong>Verificar tipo de veículo</strong> (Ponto de decisão 3).<br>
      3. Nos pontos de decisão 2 e 3: caso contrário → <strong>Informar indisponibilidade</strong> → Estado final; se <code>[rota ou destino atende ao pedido inicial]</code> e <code>[tipo de veículo é adequado ao tipo de carga]</code> → segue para o Transportador.<br>
      4. <em>Transportador:</em> <strong>Confirmar disponibilidade</strong> → decisão: se positivo <code>[o motorista atende à solicitação positivamente]</code> → volta para Aplicativo; senão → Estado final.<br>
      5. <em>Aplicativo:</em> <strong>Calcular valor e tempo de espera</strong> → <strong>Informar dados do caminhão, valor e tempo de espera</strong> → <em>Empresa:</em> <strong>Preparar a carga para transporte</strong> → Estado final.
    </div>
  `,

  '2017-q23': `
    <div style="display:flex; flex-direction:column; gap:0.75rem; width:100%;">
      <table class="data-table">
        <thead><tr><th>Conjunto Hachurado</th><th>Consulta SQL Equivalente</th></tr></thead>
        <tbody>
          <tr><td>Tabela1 inteira + Tabela2 inteira (separadas)</td><td><code>SELECT * FROM Tabela1; SELECT * FROM Tabela2;</code></td></tr>
          <tr><td>Interseção entre Tabela1 e Tabela2</td><td><code>SELECT * FROM Tabela1 t1 INNER JOIN Tabela2 t2 ON t1.id = t2.fk;</code></td></tr>
          <tr><td>Tabela1 inteira (incluindo interseção)</td><td><code>SELECT * FROM Tabela1 t1 LEFT JOIN Tabela2 t2 ON t1.id = t2.fk;</code></td></tr>
        </tbody>
      </table>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <svg viewBox="0 0 220 95" width="220" xmlns="http://www.w3.org/2000/svg">
          <circle cx="135" cy="48" r="36" fill="#3b82f6" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="85" cy="48" r="36" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
          <text x="72" y="52" text-anchor="middle" font-size="11" fill="currentColor">Tabela1</text>
          <text x="148" y="52" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Tabela2</text>
        </svg>
        <small>Conjunto alvo: apenas a parte exclusiva de Tabela2 (Tabela2 − Tabela1)</small>
      </div>
    </div>
  `,

  '2017-q24': `
    <table class="data-table center" style="max-width:300px;">
      <thead><tr><th>NOTA</th><th>QUANTIDADE DE CLIENTES</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td></tr><tr><td>2</td><td>0</td></tr>
        <tr><td>3</td><td>1</td></tr><tr><td>4</td><td>2</td></tr><tr><td>5</td><td>2</td></tr>
        <tr><td>6</td><td>2</td></tr><tr><td>7</td><td>2</td></tr><tr><td>8</td><td>2</td></tr>
        <tr><td>9</td><td>1</td></tr><tr><td>10</td><td>0</td></tr>
      </tbody>
    </table>
  `,

  '2017-q26': `
    <table class="data-table">
      <thead><tr><th>Ordem de precedência (maior → menor)</th><th>Operadores</th></tr></thead>
      <tbody>
        <tr><td>1</td><td><code>++</code> e <code>--</code> pós-fixados</td></tr>
        <tr><td>2</td><td><code>+</code> e <code>-</code> unários, <code>++</code> e <code>--</code> pré-fixados, <code>!</code></td></tr>
        <tr><td>3</td><td><code>*</code>, <code>/</code>, <code>%</code></td></tr>
        <tr><td>4</td><td><code>+</code> e <code>-</code> binários</td></tr>
        <tr><td>5</td><td><code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></td></tr>
        <tr><td>6</td><td><code>=</code>, <code>!=</code></td></tr>
        <tr><td>7</td><td><code>&amp;&amp;</code></td></tr>
        <tr><td>8</td><td><code>||</code></td></tr>
      </tbody>
    </table>
  `,

  '2017-q29': `
    <table class="data-table center" style="max-width:420px;">
      <thead><tr><th>Nível / Ator</th><th>Atividade no Processo</th></tr></thead>
      <tbody>
        <tr><td><strong>Diretoria de marketing</strong></td><td>Revisão do plano de vendas ↑</td></tr>
        <tr><td><strong>Departamento de vendas</strong></td><td>Comparação com o previsto ↑</td></tr>
        <tr><td><strong>Setor de vendas</strong></td><td>Apuração das vendas</td></tr>
      </tbody>
    </table>
  `,

  '2017-d4': `
    <svg viewBox="0 0 220 130" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="200" height="110" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="50" y1="10" x2="50" y2="120" stroke="currentColor"/>
      <line x1="90" y1="10" x2="90" y2="120" stroke="currentColor"/>
      <line x1="130" y1="10" x2="130" y2="120" stroke="currentColor"/>
      <line x1="170" y1="10" x2="170" y2="120" stroke="currentColor"/>
      <line x1="10" y1="46" x2="210" y2="46" stroke="currentColor"/>
      <line x1="10" y1="83" x2="210" y2="83" stroke="currentColor"/>
      <circle cx="30" cy="28" r="7" fill="#3b82f6"/>
      <circle cx="110" cy="28" r="7" fill="#3b82f6"/>
      <circle cx="70" cy="65" r="7" fill="#3b82f6"/>
      <circle cx="150" cy="65" r="7" fill="#3b82f6"/>
      <circle cx="30" cy="102" r="7" fill="#3b82f6"/>
      <circle cx="190" cy="102" r="7" fill="#3b82f6"/>
    </svg>
  `,

  '2017-d5': `
    <svg viewBox="0 0 540 310" xmlns="http://www.w3.org/2000/svg">
      <!-- Atleta -->
      <rect x="160" y="10" width="120" height="65" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="220" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Atleta</text>
      <line x1="160" y1="30" x2="280" y2="30" stroke="currentColor"/>
      <text x="165" y="42" font-size="8.5" fill="currentColor">nome, gênero, país,</text>
      <text x="165" y="53" font-size="8.5" fill="currentColor">comitêOlímpicoNacional</text>
      <!-- Competição -->
      <rect x="160" y="115" width="120" height="75" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="220" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Competição</text>
      <line x1="160" y1="135" x2="280" y2="135" stroke="currentColor"/>
      <text x="165" y="147" font-size="8.5" fill="currentColor">nome, equipamento,</text>
      <text x="165" y="158" font-size="8.5" fill="currentColor">tipoAlvo, posição,</text>
      <text x="165" y="169" font-size="8.5" fill="currentColor">distância</text>
      <!-- Atleta-Competição -->
      <line x1="220" y1="75" x2="220" y2="115" stroke="currentColor"/>
      <text x="180" y="98" font-size="8.5" fill="currentColor">participa</text>
      <text x="225" y="88" font-size="8.5" fill="currentColor">0..*</text>
      <text x="225" y="109" font-size="8.5" fill="currentColor">1..*</text>
      <!-- Subclasses Competição -->
      <line x1="220" y1="190" x2="220" y2="215" stroke="currentColor"/>
      <line x1="165" y1="215" x2="275" y2="215" stroke="currentColor"/>
      <line x1="165" y1="215" x2="165" y2="235" stroke="currentColor"/>
      <line x1="275" y1="215" x2="275" y2="235" stroke="currentColor"/>
      <rect x="125" y="235" width="80" height="28" fill="var(--surface)" stroke="currentColor"/>
      <text x="165" y="253" text-anchor="middle" font-size="9.5" font-weight="bold" fill="currentColor">Masculina</text>
      <rect x="235" y="235" width="80" height="28" fill="var(--surface)" stroke="currentColor"/>
      <text x="275" y="253" text-anchor="middle" font-size="9.5" font-weight="bold" fill="currentColor">Feminina</text>
      <!-- Evento -->
      <rect x="340" y="115" width="110" height="70" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="395" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Evento</text>
      <line x1="340" y1="135" x2="450" y2="135" stroke="currentColor"/>
      <text x="345" y="148" font-size="8.5" fill="currentColor">nome, data,</text>
      <text x="345" y="160" font-size="8.5" fill="currentColor">horaInício, horaTérmino</text>
      <line x1="280" y1="150" x2="340" y2="150" stroke="currentColor"/>
      <text x="296" y="145" font-size="8.5" fill="currentColor">contém</text>
      <text x="285" y="162" font-size="8.5" fill="currentColor">1</text>
      <text x="322" y="162" font-size="8.5" fill="currentColor">0..*</text>
      <!-- Subclasses Evento -->
      <text x="468" y="85" font-size="8.5" fill="currentColor">Cerimônia</text>
      <text x="468" y="150" font-size="8.5" fill="currentColor">Classificatório</text>
      <text x="468" y="205" font-size="8.5" fill="currentColor">Final</text>
      <line x1="450" y1="145" x2="465" y2="85" stroke="currentColor"/>
      <line x1="450" y1="145" x2="465" y2="145" stroke="currentColor"/>
      <line x1="450" y1="145" x2="465" y2="200" stroke="currentColor"/>
      <!-- Local -->
      <rect x="340" y="230" width="110" height="40" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="395" y="245" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Local</text>
      <line x1="340" y1="250" x2="450" y2="250" stroke="currentColor"/>
      <text x="345" y="263" font-size="8.5" fill="currentColor">nome</text>
      <line x1="395" y1="185" x2="395" y2="230" stroke="currentColor"/>
      <text x="360" y="210" font-size="8.5" fill="currentColor">possui</text>
      <text x="402" y="198" font-size="8.5" fill="currentColor">0..*</text>
      <text x="402" y="224" font-size="8.5" fill="currentColor">1</text>
    </svg>
  `,

  '2021-q09': `
    <svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="20" width="95" height="60" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="87" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Segurado</text>
      <line x1="40" y1="42" x2="135" y2="42" stroke="currentColor"/>
      <line x1="40" y1="60" x2="135" y2="60" stroke="currentColor"/>

      <rect x="215" y="20" width="95" height="60" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="262" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Seguro</text>
      <line x1="215" y1="42" x2="310" y2="42" stroke="currentColor"/>
      <line x1="215" y1="60" x2="310" y2="60" stroke="currentColor"/>

      <line x1="135" y1="50" x2="215" y2="50" stroke="currentColor" stroke-width="1.5"/>
      <text x="142" y="44" font-size="10" fill="currentColor">1..1</text>
      <text x="190" y="44" font-size="10" fill="currentColor">0..n</text>

      <!-- Generalização -->
      <polygon points="262,80 252,98 272,98" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="262" y1="98" x2="262" y2="115" stroke="currentColor"/>
      <line x1="135" y1="115" x2="375" y2="115" stroke="currentColor"/>
      <line x1="135" y1="115" x2="135" y2="135" stroke="currentColor"/>
      <line x1="262" y1="115" x2="262" y2="135" stroke="currentColor"/>
      <line x1="375" y1="115" x2="375" y2="135" stroke="currentColor"/>

      <rect x="90" y="135" width="90" height="55" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="135" y="151" text-anchor="middle" font-size="10.5" fill="currentColor">Residencial</text>
      <line x1="90" y1="156" x2="180" y2="156" stroke="currentColor"/><line x1="90" y1="173" x2="180" y2="173" stroke="currentColor"/>

      <rect x="217" y="135" width="90" height="55" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="262" y="151" text-anchor="middle" font-size="10.5" fill="currentColor">Automotivo</text>
      <line x1="217" y1="156" x2="307" y2="156" stroke="currentColor"/><line x1="217" y1="173" x2="307" y2="173" stroke="currentColor"/>

      <rect x="330" y="135" width="90" height="55" fill="var(--surface)" stroke="currentColor" stroke-width="1.5"/>
      <text x="375" y="151" text-anchor="middle" font-size="10.5" fill="currentColor">Vida</text>
      <line x1="330" y1="156" x2="420" y2="156" stroke="currentColor"/><line x1="330" y1="173" x2="420" y2="173" stroke="currentColor"/>
    </svg>
  `,

  '2021-q10': `
    <svg viewBox="0 0 430 165" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="16" font-size="10.5" font-weight="bold" fill="currentColor">Benefícios para empresas no uso de redes sociais</text>
      <text x="10" y="42" font-size="9" fill="currentColor">Divulgação da marca</text>
      <rect x="145" y="30" width="212" height="16" fill="#f97316"/><text x="362" y="42" font-size="9" font-weight="bold" fill="#f97316">53,0%</text>
      <text x="10" y="66" font-size="9" fill="currentColor">Engajamento audiência</text>
      <rect x="145" y="54" width="177" height="16" fill="#0ea5e9"/><text x="327" y="66" font-size="9" font-weight="bold" fill="#0ea5e9">44,2%</text>
      <text x="10" y="90" font-size="9" fill="currentColor">Aumento vendas/clientes</text>
      <rect x="145" y="78" width="152" height="16" fill="#ec4899"/><text x="302" y="90" font-size="9" font-weight="bold" fill="#ec4899">38,1%</text>
      <text x="10" y="114" font-size="9" fill="currentColor">Tráfego no blog/site</text>
      <rect x="145" y="102" width="140" height="16" fill="#10b981"/><text x="290" y="114" font-size="9" font-weight="bold" fill="#10b981">35,0%</text>
      <text x="10" y="138" font-size="9" fill="currentColor">Outro</text>
      <rect x="145" y="126" width="4" height="16" fill="#06b6d4"/><text x="155" y="138" font-size="9" font-weight="bold" fill="#06b6d4">0,3%</text>
    </svg>
  `,

  '2021-q23': `
    <div style="display:flex; flex-direction:column; gap:0.75rem; width:100%;">
      <table class="data-table center">
        <thead><tr><th colspan="4">MOTORISTA</th></tr><tr><th>IDMOTO</th><th>NOME</th><th>TELEFONE</th><th>IDADE</th></tr></thead>
        <tbody>
          <tr><td>22</td><td>José</td><td>8888-0000</td><td>45</td></tr>
          <tr><td>29</td><td>Maria</td><td>9999-0000</td><td>33</td></tr>
          <tr><td>31</td><td>Antônio</td><td>Null</td><td>35</td></tr>
          <tr><td>32</td><td>Carlos</td><td>3333-9999</td><td>16</td></tr>
          <tr><td>58</td><td>Josefina</td><td>3333-0000</td><td>60</td></tr>
          <tr><td>64</td><td>Marilda</td><td>3333-1111</td><td>26</td></tr>
        </tbody>
      </table>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem;">
        <table class="data-table center">
          <thead><tr><th colspan="3">CARRO</th></tr><tr><th>IDCARRO</th><th>NOMECARRO</th><th>COR</th></tr></thead>
          <tbody>
            <tr><td>101</td><td>Ônix</td><td>Vermelho</td></tr>
            <tr><td>102</td><td>Gol</td><td>Vermelho</td></tr>
            <tr><td>103</td><td>Civic</td><td>Verde</td></tr>
            <tr><td>104</td><td>Pálio</td><td>Azul</td></tr>
          </tbody>
        </table>
        <table class="data-table center">
          <thead><tr><th colspan="3">RESERVAS</th></tr><tr><th>IDMOTO</th><th>IDCARRO</th><th>DIA</th></tr></thead>
          <tbody>
            <tr><td>22</td><td>101</td><td>07/08/2020</td></tr>
            <tr><td>22</td><td>102</td><td>07/08/2020</td></tr>
            <tr><td>22</td><td>103</td><td>09/08/2020</td></tr>
            <tr><td>22</td><td>104</td><td>10/08/2020</td></tr>
            <tr><td>31</td><td>102</td><td>10/08/2020</td></tr>
            <tr><td>31</td><td>103</td><td>11/08/2020</td></tr>
            <tr><td>64</td><td>101</td><td>13/08/2020</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  '2021-q28': `
    <svg viewBox="0 0 460 155" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="120" height="36" fill="var(--surface)" stroke="currentColor"/>
      <text x="70" y="26" text-anchor="middle" font-size="9.5" fill="currentColor">TI como prestadora</text>
      <text x="70" y="38" text-anchor="middle" font-size="9.5" fill="currentColor">de serviços</text>
      <rect x="10" y="60" width="120" height="32" fill="var(--surface)" stroke="currentColor"/>
      <text x="70" y="80" text-anchor="middle" font-size="9.5" fill="currentColor">Ambientes de negócios</text>
      <rect x="10" y="106" width="120" height="32" fill="var(--surface)" stroke="currentColor"/>
      <text x="70" y="126" text-anchor="middle" font-size="9.5" fill="currentColor">Marcos de regulação</text>

      <rect x="180" y="50" width="100" height="50" fill="var(--primary-soft)" stroke="currentColor" stroke-width="1.5"/>
      <text x="230" y="72" text-anchor="middle" font-size="10.5" font-weight="bold" fill="currentColor">Governança de</text>
      <text x="230" y="86" text-anchor="middle" font-size="10.5" font-weight="bold" fill="currentColor">TI</text>

      <rect x="330" y="25" width="120" height="36" fill="var(--surface)" stroke="currentColor"/>
      <text x="390" y="47" text-anchor="middle" font-size="9.5" fill="currentColor">Integração Tecnológica</text>
      <rect x="330" y="92" width="120" height="36" fill="var(--surface)" stroke="currentColor"/>
      <text x="390" y="108" text-anchor="middle" font-size="9.5" fill="currentColor">Segurança da</text>
      <text x="390" y="120" text-anchor="middle" font-size="9.5" fill="currentColor">informação</text>

      <line x1="130" y1="28" x2="180" y2="62" stroke="currentColor"/>
      <line x1="130" y1="76" x2="180" y2="76" stroke="currentColor"/>
      <line x1="130" y1="122" x2="180" y2="88" stroke="currentColor"/>
      <line x1="330" y1="43" x2="280" y2="65" stroke="currentColor"/>
      <line x1="330" y1="110" x2="280" y2="85" stroke="currentColor"/>
    </svg>
  `,

  '2021-q29': `
    <div class="code-block" style="font-family: var(--font-sans);">
      <strong>Modelo Entidade-Relacionamento (Clínica Médica):</strong><br>
      • <strong>ESPECIALIDADE</strong> <code>(1,N)</code> — <em>Atua na</em> — <code>(1,1)</code> <strong>MEDICO</strong><br>
      • <strong>MEDICO</strong> <code>(1,1)</code> — <em>Atende</em> — <code>(1,N)</code> <strong>CONSULTA</strong><br>
      • <strong>FUNCIONARIO</strong> <code>(0,1)</code> — <em>Agenda</em> — <code>(1,N)</code> <strong>CONSULTA</strong><br>
      • <strong>CONVENIO</strong> <code>(1,1)</code> — <em>Possui</em> — <code>(0,N)</code> <strong>PACIENTE</strong><br>
      • <strong>CONSULTA</strong> <code>(1,1)</code> — <em>Marca</em> — <code>(0,N)</code> <strong>PACIENTE</strong><br>
      • <strong>PACIENTE</strong> <code>(0,N)</code> — <em>Depende de</em> — <code>(1,1)</code> <strong>DEPENDENTE</strong>
    </div>
  `,

  '2021-q32': `
    <div class="code-block" style="font-family: var(--font-sans);">
      <strong>Diagrama de Sequência (SAMU ↔ Hospitais):</strong><br>
      1: <code>SAMU → :Regulacao: solicitarLeito()</code><br>
      2: <code>:Regulacao → :API: procurarLeitos()</code><br>
      3: <code>:API → :API: verificarTodos()</code><br>
      4: <code>:API → :hospitalA: procurarVaga()</code> (assíncrona/paralela) &nbsp;|&nbsp; 5: <code>:API → :hospitalB: procurarVaga()</code><br>
      6: <code>:hospitalA --→ :API: disponibilidade</code> &nbsp;|&nbsp; 7: <code>:hospitalB --→ :API: disponibilidade</code><br>
      8: <code>:API --→ :Regulacao: vagas disponiveis</code><br>
      9: <code>:Regulacao → :API: escolherLeito(hosp)</code><br>
      10: <code>:API → :hospitalA: definirVaga()</code> → 11: <code>:hospitalA --→ :API: ok</code><br>
      12: <code>:API → :hospitalB: definirVaga()</code> → 13: <code>:hospitalB --→ :API: ok</code><br>
      14: <code>:API --→ :Regulacao: vaga definida</code> → 15: <code>:Regulacao --→ SAMU: vaga</code>
    </div>
  `,

  '2021-d4': `
    <svg viewBox="0 0 320 155" width="300" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="78" rx="145" ry="70" fill="none" stroke="#0284c7" stroke-width="2"/>
      <rect x="45" y="25" width="90" height="24" fill="var(--surface)" stroke="currentColor"/>
      <text x="90" y="41" text-anchor="middle" font-size="10" fill="currentColor">Subsistema 1</text>
      <rect x="185" y="25" width="90" height="24" fill="var(--surface)" stroke="currentColor"/>
      <text x="230" y="41" text-anchor="middle" font-size="10" fill="currentColor">Subsistema 2</text>
      <rect x="45" y="70" width="90" height="24" fill="var(--surface)" stroke="currentColor"/>
      <text x="90" y="86" text-anchor="middle" font-size="10" fill="currentColor">Subsistema 3</text>
      <rect x="185" y="70" width="90" height="24" fill="var(--surface)" stroke="currentColor"/>
      <text x="230" y="86" text-anchor="middle" font-size="10" fill="currentColor">Subsistema 4</text>
      <rect x="115" y="108" width="90" height="24" fill="var(--surface)" stroke="currentColor"/>
      <text x="160" y="124" text-anchor="middle" font-size="10" fill="currentColor">Subsistema 5</text>
      <line x1="135" y1="37" x2="185" y2="37" stroke="#0284c7"/>
      <line x1="230" y1="49" x2="230" y2="70" stroke="#0284c7"/>
      <line x1="135" y1="82" x2="185" y2="82" stroke="#0284c7"/>
      <line x1="100" y1="94" x2="135" y2="108" stroke="#0284c7"/>
      <text x="160" y="61" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Relação</text>
      <text x="160" y="143" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">Sistema – Propósito</text>
    </svg>
  `,

  '2021-d5': `
    <div class="code-block" style="font-family: var(--font-sans);">
      <strong>Diagrama de Casos de Uso UML (Padrão de Resposta):</strong><br>
      • <strong>Atores:</strong> <code>Atendente</code> (superclasse) ← <em>generalização</em> ← <code>Gerente</code> (subclasse).<br>
      • <strong>Caso de uso principal:</strong> <code>Processar venda</code> (associado ao <code>Atendente</code>).<br>
      • <code>Processar venda</code> <code>&lt;&lt;include&gt;&gt;</code> → <code>Emitir nota fiscal</code>.<br>
      • <code>Solicitar entrega</code> <code>&lt;&lt;extend&gt;&gt;</code> → <code>Processar venda</code>.<br>
      • Especializações de <code>Processar venda</code>: <code>Processar venda à vista</code> e <code>Processar venda a prazo</code>.<br>
      • Especializações de <code>Processar venda a prazo</code>: <code>Processar venda com cartão</code> e <code>Processar venda com boleto</code>.<br>
      • <code>Processar venda à vista</code> <code>&lt;&lt;include&gt;&gt;</code> → <code>Calcular desconto</code>; <code>Calcular desconto</code> <code>&lt;&lt;extend&gt;&gt;</code> → <code>Processar venda com boleto</code>.
    </div>
  `,
};
