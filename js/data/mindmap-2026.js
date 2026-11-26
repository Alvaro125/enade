export const enade2026Info = {
  title: 'ENADE 2026 — Bacharelado em Sistemas de Informação',
  normatives: [
    'Portaria MEC nº 276/2026 (Ano II do ciclo avaliativo SINAES)',
    'Portaria INEP nº 168/2026 (Diretrizes do Componente Específico de SI)',
    'Editais INEP nº 49/2026 e nº 61/2026 (Normas, prazos e procedimentos)',
  ],
  structure: {
    fg: '15 questões objetivas de Formação Geral',
    ce: '30 questões objetivas + 1 questão discursiva de Componente Específico',
    duration: '4 horas de duração total',
  },
  competencies: [
    {
      id: 'Competência I',
      text: 'Compreender, analisar e avaliar soluções de Tecnologia da Informação (TI) para resolver problemas organizacionais e sociais (arquitetura de negócio, programação, desempenho/escalabilidade e qualidade de processos e produtos).',
    },
    {
      id: 'Competência II',
      text: 'Gerenciar dados, informações e conhecimento, aplicando princípios de arquitetura de sistemas e segurança da informação, propondo soluções técnicas e algorítmicas para apoiar a tomada de decisão.',
    },
  ],
};

export const mindMapBranches = [
  {
    id: 'eixo-fundamentos',
    color: '#2563eb',
    title: '1. Fundamentos Matemáticos, Lógicos e Algoritmos',
    subtitle: 'Base formal, modelagem quantitativa e resolução algorítmica',
    nodes: [
      {
        id: 'logica-discreta',
        title: '1. Lógica Matemática e Matemática Discreta',
        relatedArea: 'Matemática, Lógica e Estatística',
        summary: 'Base formal para raciocínio computacional, especificação de sistemas, provas de corretude e modelagem de relações.',
        topics: [
          'Lógica proposicional: conectivos (∧, ∨, ¬, →, ↔), tabelas-verdade, tautologia e equivalências (Leis de De Morgan)',
          'Lógica de predicados: quantificadores universal (∀) e existencial (∃) e negação de quantificadores',
          'Teoria dos conjuntos, relações (reflexiva, simétrica, transitiva), funções e combinatória',
          'Teoria dos grafos: vértices, arestas, grau/valência, adjacência, incidência, grafos dirigidos e árvores',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Condicional (p → q):</strong> só é falsa quando <code>p = V</code> e <code>q = F</code>. Equivalente a <code>¬p ∨ q</code> e à contrapositiva <code>¬q → ¬p</code>.</li>
            <li><strong>Leis de De Morgan:</strong> <code>¬(p ∧ q) ≡ ¬p ∨ ¬q</code> e <code>¬(p ∨ q) ≡ ¬p ∧ ¬q</code>.</li>
            <li><strong>Grafos:</strong> dois vértices são <em>adjacentes</em> se ligados por uma aresta; o <em>grau (valência)</em> é o número de arestas incidentes no vértice (a soma dos graus é sempre o dobro do nº de arestas).</li>
          </ul>
        `,
        examTip: 'Muito cobrado com tabelas-verdade e propriedades de grafos (adjacência, valência e conectividade).',
        resources: [
          { label: 'Khan Academy — Lógica e Grafos', url: 'https://pt.khanacademy.org/computing/computer-science' },
          { label: 'IME-USP — Matemática Discreta', url: 'https://www.ime.usp.br/~pf/algoritmos_para_grafos/' },
        ],
      },
      {
        id: 'prob-estatistica',
        title: '2. Probabilidade e Estatística',
        relatedArea: 'Matemática, Lógica e Estatística',
        summary: 'Ferramental para análise de dados, incerteza, qualidade de processos e suporte à decisão gerencial.',
        topics: [
          'Estatística descritiva: média, mediana, moda, quartis, variância e desvio padrão',
          'Probabilidade condicional, independência e Teorema de Bayes',
          'Distribuições de probabilidade (Normal, Binomial, Poisson)',
          'Amostragem, testes de hipótese e correlação vs. causalidade',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Medidas de Tendência Central:</strong> <em>Média</em> (sensível a outliers), <em>Mediana</em> (elemento central ordenado — 50% / 2º quartil) e <em>Moda</em> (valor mais frequente; pode ser amodal, unimodal ou multimodal).</li>
            <li><strong>Quartis:</strong> Q1 (25%), Q2 (50% = mediana), Q3 (75%).</li>
            <li><strong>Dispersão:</strong> Desvio padrão = √Variância; quanto menor, mais homogêneos os dados em torno da média.</li>
          </ul>
        `,
        examTip: 'Atenção à interpretação de gráficos/tabelas e cálculo de média, mediana e quartis em conjuntos simétricos.',
        resources: [
          { label: 'Khan Academy — Probabilidade e Estatística', url: 'https://pt.khanacademy.org/math/statistics-probability' },
        ],
      },
      {
        id: 'algoritmos-ed',
        title: '3. Algoritmos e Estruturas de Dados',
        relatedArea: 'Algoritmos e Estruturas de Dados',
        summary: 'Organização eficiente de dados em memória e projeto de algoritmos para busca, ordenação e resolução de problemas.',
        topics: [
          'Estruturas lineares: vetores, matrizes, listas encadeadas, pilhas (LIFO), filas (FIFO) e deques',
          'Estruturas não lineares: árvores binárias, árvores de busca (ABB/AVL) e grafos (BFS/DFS)',
          'Tabelas de dispersão (Hash): funções hash, colisões e encadeamento',
          'Complexidade assintótica (Big-O), recursividade e ordenação (QuickSort, MergeSort)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Pilha (LIFO):</strong> <em>push</em> e <em>pop</em> ocorrem no mesmo extremo (topo). Ideal para desfazer ações, chamadas de função e leitura do mais recente ao mais antigo.</li>
            <li><strong>Fila (FIFO):</strong> inserção no fim (<em>enqueue</em>) e remoção no início (<em>dequeue</em>).</li>
            <li><strong>Tabela Hash:</strong> busca média O(1) via função <code>h(k) = k mod T</code>; colisões são tratadas por encadeamento externo (listas ligadas) ou endereçamento aberto.</li>
            <li><strong>Complexidade:</strong> Busca Linear O(n) | Busca Binária O(log n) | MergeSort/HeapSort O(n log n).</li>
          </ul>
        `,
        examTip: 'O ENADE costuma contextualizar pilhas/filas/matrizes em problemas reais e cobrar rastreio de pseudocódigo.',
        resources: [
          { label: 'IME-USP — Projeto de Algoritmos', url: 'https://www.ime.usp.br/~pf/algoritmos/' },
          { label: 'VisuAlgo — Visualização de Estruturas de Dados', url: 'https://visualgo.net/en' },
        ],
      },
      {
        id: 'linguagens',
        title: '4. Fundamentos e Paradigmas de Linguagens de Programação',
        relatedArea: 'Algoritmos e Estruturas de Dados',
        summary: 'Compreensão dos diferentes modelos de programação, semântica de execução, tipagem e avaliação de expressões.',
        topics: [
          'Paradigma Imperativo/Estruturado e Orientação a Objetos (classes, herança, polimorfismo, encapsulamento)',
          'Paradigma Funcional (funções puras, imutabilidade, alta ordem) e Lógico (Prolog: fatos, regras, unificação)',
          'Precedência e associatividade de operadores, pré/pós-incremento',
          'Escopo de variáveis, passagem de parâmetros (valor vs. referência) e tipagem estática/dinâmica',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Prolog (Paradigma Lógico):</strong> programa composto por <em>fatos</em> (ex.: <code>pai(joao, maria).</code>) e <em>regras</em> <code>cabeça :- corpo</code> (lê-se: cabeça é verdadeira SE corpo for verdadeiro).</li>
            <li><strong>Operadores pré vs. pós-fixados:</strong> <code>++x</code> incrementa antes de retornar o valor na expressão; <code>x++</code> retorna o valor atual e incrementa depois.</li>
            <li><strong>Ordem de precedência típica:</strong> Pós-fixados → Unários/Pré-fixados → Multiplicativos (<code>* / %</code>) → Aditivos (<code>+ -</code>) → Relacionais → Igualdade → <code>&amp;&amp;</code> → <code>||</code>.</li>
          </ul>
        `,
        examTip: 'Revise cláusulas Prolog (cabeça e corpo) e precedência de operadores aritméticos/lógicos.',
        resources: [
          { label: 'MDN Web Docs — Guia de JavaScript e Conceitos', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide' },
          { label: 'SWI-Prolog — Documentação e Tutoriais', url: 'https://www.swi-prolog.org/pldoc/man?section=quickstart' },
        ],
      },
      {
        id: 'pesquisa-operacional',
        title: '5. Pesquisa Operacional',
        relatedArea: 'Matemática, Lógica e Estatística',
        summary: 'Modelagem matemática para otimização de recursos limitados, logística e tomada de decisão organizacional.',
        topics: [
          'Modelagem de Programação Linear (PL): variáveis de decisão, função objetivo (Min/Max) e restrições',
          'Sinais de restrição: demanda mínima (≥), capacidade máxima (≤) e balanço (=)',
          'Método Gráfico e Método Simplex (solução ótima e região factível)',
          'Teoria das filas e simulação de sistemas',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Passo 1 (Variáveis):</strong> definir o que se quer decidir (ex.: <code>x</code> = dias da fábrica A, <code>y</code> = dias da fábrica B).</li>
            <li><strong>Passo 2 (Função Objetivo):</strong> maximizar lucro ou minimizar custo (<code>Min Z = c1·x + c2·y</code>).</li>
            <li><strong>Passo 3 (Restrições):</strong> "atender à demanda de pelo menos D" usa <code>≥ D</code>; "disponibilidade máxima de recurso R" usa <code>≤ R</code>; além da não-negatividade (<code>x, y ≥ 0</code>).</li>
          </ul>
        `,
        examTip: 'Foque na tradução de problemas textuais de produção/transporte para o modelo matemático de PL.',
        resources: [
          { label: 'UNIVESP — Pesquisa Operacional (Material Aberto)', url: 'https://apps.univesp.br/repositorio/' },
        ],
      },
    ],
  },
  {
    id: 'eixo-engenharia',
    color: '#7c1d4b',
    title: '2. Engenharia de Software, Modelagem e IHC',
    subtitle: 'Concepção, especificação, qualidade, testes e experiência do usuário',
    nodes: [
      {
        id: 'engenharia-software',
        title: '12. Engenharia de Software',
        relatedArea: 'Engenharia de Software',
        summary: 'Processos, métodos e ferramentas para desenvolver e manter software com qualidade, previsibilidade e controle.',
        topics: [
          'Modelos tradicionais: Cascata (sequencial), V-Model, Incremental e Espiral (foco em riscos)',
          'Métodos Ágeis: Manifesto Ágil, Scrum, Extreme Programming (XP) e Kanban',
          'Engenharia de Requisitos: Requisitos Funcionais (RF), Não Funcionais (RNF) e Regras de Negócio (RN)',
          'Verificação e Validação (V&V), testes, Gerência de Configuração e Maturidade (CMMI-Dev e MPS-SW)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Modelo Cascata (Waterfall):</strong> fases estritamente sequenciais (Requisitos → Projeto → Implementação → Testes → Manutenção) sem sobreposição. Bom para requisitos muito estáveis; arriscado porque testes ficam no final (acúmulo tardio de defeitos).</li>
            <li><strong>Modelo Espiral (Boehm):</strong> iterativo e incremental orientado à <strong>análise de riscos</strong> a cada ciclo (Planejamento → Análise de Riscos → Engenharia → Avaliação).</li>
            <li><strong>Scrum (Ágil):</strong>
              <ul>
                <li><em>Papéis (Accountabilities):</em> <strong>Product Owner (PO)</strong> maximiza valor e gerencia o Product Backlog; <strong>Scrum Master</strong> facilita o processo e remove impedimentos; <strong>Developers</strong> criam o Incremento.</li>
                <li><em>Eventos (Time-boxed):</em> <strong>Sprint</strong> (1 a 4 semanas), <strong>Sprint Planning</strong>, <strong>Daily Scrum</strong> (15 min), <strong>Sprint Review</strong> (inspecionar incremento com stakeholders) e <strong>Sprint Retrospective</strong> (melhoria contínua do time).</li>
                <li><em>Artefatos e Compromissos:</em> Product Backlog (Meta do Produto), Sprint Backlog (Meta da Sprint) e Incremento (Definição de Pronto / DoD).</li>
              </ul>
            </li>
            <li><strong>XP (Extreme Programming):</strong> foco em excelência técnica e feedback rápido. Práticas clássicas: <strong>TDD</strong> (Test-Driven Development), <strong>Programação em Par</strong> (Pair Programming), <strong>Integração Contínua</strong>, <strong>Refatoração</strong>, <strong>Código Coletivo</strong>, <strong>Releases Pequenos</strong> e <strong>Cliente Presente</strong>.</li>
            <li><strong>Kanban:</strong> fluxo contínuo (sem Sprints obrigatórias), visualização do trabalho em quadro e <strong>limite de WIP</strong> (Work In Progress) para evitar gargalos.</li>
            <li><strong>Requisitos:</strong> <em>RF</em> (o que o sistema faz), <em>RNF</em> (qualidade/desempenho/segurança/usabilidade) e <em>RN</em> (política da organização).</li>
          </ul>
        `,
        examTip: 'Diferenciar Cascata vs. Ágil (Scrum/XP), RF vs. RNF vs. RN, e CMMI (5 níveis) vs. MPS-SW (7 níveis) cai em quase toda edição.',
        resources: [
          { label: 'Guia do Scrum Oficial (PT-BR)', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-PortugueseBR-3.0.pdf' },
          { label: 'Manifesto Ágil (PT-BR)', url: 'https://agilemanifesto.org/iso/ptbr/manifesto.html' },
          { label: 'Engenharia de Software Moderna (Livro Aberto — Marco Tulio Valente)', url: 'https://engsoftmoderna.info/' },
        ],
      },
      {
        id: 'modelagem-si',
        title: '13. Concepção e Modelagem de Sistemas de Informação',
        relatedArea: 'Engenharia de Software',
        summary: 'Representação estrutural e comportamental de sistemas antes e durante a implementação.',
        topics: [
          'UML Estrutural: Diagrama de Classes (associação, agregação, composição, generalização, multiplicidade)',
          'UML Comportamental: Casos de Uso («include», «extend», generalização de atores)',
          'UML Dinâmica: Diagrama de Atividades (raias, fork/join, decisões) e Sequência (síncrona vs. assíncrona)',
          'Padrões de projeto (Design Patterns GoF) e arquitetura em camadas / microsserviços',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Casos de Uso:</strong> <code>«include»</code> indica comportamento obrigatório (seta sai do caso base para o incluído); <code>«extend»</code> indica comportamento opcional/condicional (seta sai da extensão para o caso base).</li>
            <li><strong>Diagrama de Classes:</strong> triângulo vazio = herança/generalização; losango vazio = agregação (todo-parte fraca); losango preenchido = composição (todo-parte forte, ciclo de vida dependente).</li>
            <li><strong>Diagrama de Sequência:</strong> seta com ponta preenchida = chamada <em>síncrona</em> (bloqueante); seta com ponta aberta = <em>assíncrona</em> (não bloqueante / paralela); linha tracejada = retorno.</li>
          </ul>
        `,
        examTip: 'Saiba distinguir «include» (obrigatório) de «extend» (opcional) e setas síncronas (cheias) de assíncronas (abertas).',
        resources: [
          { label: 'Refactoring Guru — Padrões de Projeto', url: 'https://refactoring.guru/pt-br/design-patterns' },
          { label: 'OMG UML — Especificação Oficial', url: 'https://www.omg.org/spec/UML/' },
        ],
      },
      {
        id: 'ihc',
        title: '16. Interação Humano-Computador (IHC)',
        relatedArea: 'IHC e Usabilidade',
        summary: 'Projeto e avaliação de interfaces centradas no usuário, visando usabilidade, acessibilidade e ergonomia.',
        topics: [
          'Processo de Design de Interação: necessidades, alternativas, prototipação e avaliação com usuários',
          'Usabilidade (eficácia, eficiência, satisfação) e 10 Heurísticas de Nielsen',
          'Ergonomia e Legibilidade: contraste letra/fundo, tipografia, comprimento de linha e acessibilidade (WCAG)',
          'Experiência do Usuário (UX) e participação indispensável do usuário no projeto',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Design de Interação (4 atividades):</strong> 1) Identificar necessidades e estabelecer requisitos; 2) Desenvolver designs alternativos; 3) Construir versões interativas (protótipos); 4) Avaliar com usuários.</li>
            <li><strong>Legibilidade (Cybis et al.):</strong> texto longo em maiúsculas e minúsculas misturadas naturalmente; alto contraste; para idosos ou baixa visão, letras claras sobre fundo escuro evitam ofuscamento.</li>
          </ul>
        `,
        examTip: 'Lembre-se: a participação do usuário é indispensável e alto contraste + maiúsculas/minúsculas melhoram a legibilidade.',
        resources: [
          { label: 'Nielsen Norman Group — 10 Heurísticas de Usabilidade', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/' },
          { label: 'W3C WAI — Acessibilidade Web (WCAG)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' },
        ],
      },
    ],
  },
  {
    id: 'eixo-dados',
    color: '#0f766e',
    title: '3. Dados, Informação e Ciência de Dados',
    subtitle: 'Armazenamento, consulta estruturada, Big Data e análise visual',
    nodes: [
      {
        id: 'banco-dados',
        title: '18. Banco de Dados',
        relatedArea: 'Banco de Dados',
        summary: 'Modelagem conceitual, lógica e física, linguagens de consulta e gerenciamento de transações.',
        topics: [
          'Modelagem Conceitual (DER): entidades, atributos, cardinalidades (min, max) e participação total/parcial',
          'Mapeamento DER → Relacional: tabelas associativas (N:M), chaves estrangeiras (1:N) e especializações',
          'Normalização (1FN, 2FN, 3FN) e integridade referencial',
          'SQL: DDL, DML, INNER/LEFT/RIGHT JOIN, subconsultas (IN, EXISTS), NULL (IS NULL) e agregações',
          'Propriedades ACID de transações e bancos NoSQL',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Mapeamento DER → Relacional:</strong> em <code>1:N</code>, a PK do lado 1 vira FK no lado N; em <code>N:M</code>, cria-se tabela associativa com PK composta; em especialização com 3 tabelas, as filhas herdam a PK da tabela pai como PK/FK.</li>
            <li><strong>Cardinalidade (min, max):</strong> <code>min = 1</code> indica participação <em>total</em> (obrigatória); <code>min = 0</code> indica participação <em>parcial</em> (opcional).</li>
            <li><strong>SQL e NULL:</strong> sempre use <code>IS NULL</code> ou <code>IS NOT NULL</code> (nunca <code>= NULL</code> ou <code>&lt;&gt; NULL</code>).</li>
          </ul>
        `,
        examTip: 'Domine mapeamento de DER para tabelas relacionais e junções SQL com filtro IS NULL.',
        resources: [
          { label: 'PostgreSQL — Documentação SQL', url: 'https://www.postgresql.org/docs/current/sql.html' },
          { label: 'W3Schools — Tutorial SQL Interativo', url: 'https://www.w3schools.com/sql/' },
        ],
      },
      {
        id: 'ciencia-dados',
        title: '19. Visualização e Ciência de Dados',
        relatedArea: 'Banco de Dados',
        summary: 'Extração de valor e conhecimento a partir de grandes volumes de dados heterogêneos para suporte à decisão.',
        topics: [
          'Data Warehouse, OLAP (cubos, slice, dice, drill-down), ETL e Business Intelligence (BI)',
          'Big Data e os 4 Vs: Volume, Variedade (estruturados, semiestruturados, não estruturados), Velocidade (baixa latência) e Veracidade',
          'Mineração de Dados (Data Mining) e aprendizado de máquina (classificação, agrupamento, regressão)',
          'Visualização de dados: escolha adequada de gráficos e prevenção de distorções visuais',
        ],
        detailsHtml: `
          <ul>
            <li><strong>4 Vs do Big Data:</strong> <em>Volume</em> (escala massiva), <em>Variedade</em> (dados estruturados de BDs, semiestruturados como JSON/XML/sensores e não estruturados como vídeo/texto), <em>Velocidade</em> (processamento em <strong>baixa latência</strong> / tempo real) e <em>Veracidade</em> (confiabilidade).</li>
            <li><strong>OLTP vs. OLAP:</strong> OLTP foca em transações diárias normalizadas; OLAP foca em análise histórica (Data Warehouse, esquema estrela/floco de neve).</li>
          </ul>
        `,
        examTip: 'Velocidade em Big Data exige processamento de BAIXA latência (tempo real), nunca alta latência.',
        resources: [
          { label: 'Kaggle Learn — Cursos gratuitos de Ciência de Dados', url: 'https://www.kaggle.com/learn' },
        ],
      },
    ],
  },
  {
    id: 'eixo-gestao',
    color: '#b45309',
    title: '4. Sistemas, Processos, Projetos e Governança de TI',
    subtitle: 'Alinhamento estratégico da TI aos negócios e entrega de valor',
    nodes: [
      {
        id: 'fundamentos-si',
        title: '6. Fundamentos de SI e Teoria Geral de Sistemas',
        relatedArea: 'Sistemas de Informação e BPM',
        summary: 'Compreensão sistêmica das organizações e da transformação de dados em informação e conhecimento.',
        topics: [
          'Teoria Geral de Sistemas (TGS): subsistemas, relação/interação dinâmica, ambiente, entradas/saídas e propósito',
          'Pirâmide Dado → Informação → Conhecimento (tácito e explícito / Espiral SECI)',
          'Tipos de SI: SPT (Transacionais), SIG (Gerenciais), SAD (Apoio à Decisão), SAE (Executivos) e Sistemas Especialistas (Motor de Inferência)',
          'Sistemas Integrados (ERP: parametrização vs. customização) e CRM/SCM',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Dado vs. Informação vs. Conhecimento:</strong> <em>Dado</em> = registro bruto sem contexto (ex.: nota 7,5); <em>Informação</em> = dado organizado/processado com significado (ex.: média da turma 7,8); <em>Conhecimento</em> = aplicação analítica para decisão/ação.</li>
            <li><strong>ERP:</strong> <em>Parametrização</em> = configurar variáveis internas nativas; <em>Customização</em> = alterar/escrever código para regras não previstas.</li>
          </ul>
        `,
        examTip: 'Diferenciar dado bruto, informação processada e conhecimento aplicado é tema clássico (inclusive em discursivas).',
        resources: [
          { label: 'ENADE / INEP — Provas e Gabaritos Anteriores', url: 'https://www.gov.br/inep/pt-br/areas-de-avaliacao/avaliacao-da-educacao-superior/enade/provas-e-gabaritos' },
        ],
      },
      {
        id: 'arquitetura-corp',
        title: '7. Arquitetura Corporativa e da Informação',
        relatedArea: 'Sistemas de Informação e BPM',
        summary: 'Mapeamento holístico de processos de negócio, dados, aplicações e infraestrutura tecnológica na organização.',
        topics: [
          'Arquitetura de Sistemas de Informação (ASI) e Cadeia de Valor de Porter apoiada por TI',
          'Alinhamento estratégico TI–Negócio e vantagem competitiva',
          'Organização da informação, taxonomias e arquitetura de informação em ambientes digitais',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Cadeia de Valor de Porter:</strong> <em>Atividades Primárias</em> (Logística Interna, Operações, Logística Externa, Marketing/Vendas, Serviços) e <em>Atividades de Apoio</em> (Infraestrutura, RH, Tecnologia, Aquisições).</li>
            <li><strong>ASI:</strong> integra estratégia de negócio, processos, dados e infraestrutura de TI.</li>
          </ul>
        `,
        examTip: 'Observe como processos primários e de apoio na cadeia de valor se conectam com sistemas (ERP, CRM, Intranet/Extranet).',
        resources: [
          { label: 'The Open Group — TOGAF (Arquitetura Corporativa)', url: 'https://www.opengroup.org/togaf' },
        ],
      },
      {
        id: 'governanca-ti',
        title: '8. Governança de Tecnologia da Informação',
        relatedArea: 'Governança e Gestão de TI',
        summary: 'Direcionamento, avaliação e monitoramento do uso da TI para garantir valor, conformidade e controle de riscos.',
        topics: [
          'ISO/IEC 38500: ciclo Avaliar, Direcionar e Monitorar (EDM)',
          'COBIT: separação entre Governança (EDM) e Gestão (APO, BAI, DSS, MEA)',
          'ITIL: Gerenciamento de Serviços de TI, Catálogo de Serviços e SLA (Acordo de Nível de Serviço)',
          'Compliance (SOX, LGPD), Centros de Serviços Compartilhados (CSC) e TI Verde (Green IT)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Governança vs. Gestão:</strong> <em>Governança</em> avalia necessidades, direciona estratégias e monitora desempenho (EDM); <em>Gestão</em> planeja, constrói, executa e monitora atividades alinhadas à direção.</li>
            <li><strong>ITIL / SLA:</strong> o SLA formaliza metas de disponibilidade/desempenho entre provedor de TI e cliente, exigindo monitoramento contínuo.</li>
          </ul>
        `,
        examTip: 'ISO/IEC 38500 e COBIT definem o direcionamento/monitoramento da governança; ITIL foca na entrega e suporte de serviços.',
        resources: [
          { label: 'ISACA — COBIT Framework', url: 'https://www.isaca.org/resources/cobit' },
          { label: 'ISO/IEC 38500 — Visão Geral', url: 'https://www.iso.org/standard/62816.html' },
        ],
      },
      {
        id: 'gestao-projetos',
        title: '14. Gerenciamento de Projetos',
        relatedArea: 'Gestão de Projetos (PMBOK)',
        summary: 'Aplicação de conhecimentos, habilidades e técnicas para executar projetos de forma eficaz e eficiente.',
        topics: [
          'Definição de projeto (esforço temporário, entrega única) vs. operação contínua',
          'Ciclo de vida e grupos de processos (Iniciação, Planejamento, Execução, Monitoramento/Controle, Encerramento)',
          'Artefatos: Termo de Abertura (TAP), EAP (WBS — pacotes de entrega) e Matriz de Responsabilidades (RACI)',
          'Gerenciamento de Escopo, Tempo, Custos e Riscos (probabilidade entre 0% e 100% exclusive; impacto positivo ou negativo)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Riscos (PMBOK):</strong> evento incerto (<code>0% &lt; P &lt; 100%</code>) com impacto positivo (oportunidade) ou negativo (ameaça) em objetivos do projeto.</li>
            <li><strong>EAP (WBS) vs. RACI:</strong> a EAP decompõe o escopo em pacotes de trabalho/entregas; a Matriz RACI (<em>Responsible, Accountable, Consulted, Informed</em>) atribui responsabilidades.</li>
          </ul>
        `,
        examTip: 'A EAP decompõe entregas, mas quem define responsabilidades pelos entregáveis é a Matriz de Responsabilidades.',
        resources: [
          { label: 'PMI — Guia PMBOK e Recursos', url: 'https://www.pmi.org/pmbok-guide-standards' },
        ],
      },
      {
        id: 'gestao-processos',
        title: '15. Modelagem e Gestão de Processos de Negócio e da Informação',
        relatedArea: 'Sistemas de Informação e BPM',
        summary: 'Identificação, modelagem, automação e melhoria contínua dos processos organizacionais.',
        topics: [
          'BPM (Business Process Management) e notação BPMN (eventos, atividades, gateways, raias)',
          'Sistemas BPMS: orquestração de fluxos e redução do tempo de trâmite entre níveis organizacionais',
          'Distinção entre processo de negócio completo vs. tarefa isolada ou canal de venda',
        ],
        detailsHtml: `
          <ul>
            <li><strong>BPMN:</strong> Eventos (círculos), Atividades (retângulos arredondados), Gateways (losangos — exclusivo XOR, paralelo AND, inclusivo OR) e Pools/Lanes (participantes).</li>
            <li><strong>BPMS:</strong> automatiza o fluxo ponta a ponta entre setores, reduzindo tempo de envio/recebimento de dados.</li>
          </ul>
        `,
        examTip: 'BPMS reduz gargalos e tempo de trâmite de informações entre setores operacional, tático e estratégico.',
        resources: [
          { label: 'OMG BPMN — Especificação e Exemplos', url: 'https://www.bpmn.org/' },
        ],
      },
    ],
  },
  {
    id: 'eixo-infra',
    color: '#0369a1',
    title: '5. Infraestrutura, Redes e Segurança',
    subtitle: 'Hardware, sistemas operacionais, conectividade, nuvem e proteção de ativos',
    nodes: [
      {
        id: 'arq-computadores',
        title: '9. Arquitetura e Organização de Computadores',
        relatedArea: 'Arquitetura e Infraestrutura',
        summary: 'Funcionamento interno do hardware, hierarquia de memória, paralelismo e análise de desempenho.',
        topics: [
          'Arquitetura de Von Neumann, ULA, UC, registradores e ciclo de instrução',
          'Hierarquia de memória (cache, RAM, disco) e barramentos',
          'Processamento paralelo, clusters (alta disponibilidade, escalabilidade, custo/desempenho) e GPUs',
          'Métricas de desempenho: throughput, latência, tempo de resposta e utilização de disco (U = X × S)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Clusters:</strong> interligação via rede (não barramento de controle interno), tolerância a falhas (queda de 1 nó não para o serviço) e maior escalabilidade/custo-benefício que uma máquina única de grande porte.</li>
            <li><strong>Desempenho (Lei da Utilização):</strong> <code>U = X × S</code>, onde <code>X</code> é o throughput (operações/s) e <code>S</code> o tempo médio de serviço por operação (em segundos).</li>
          </ul>
        `,
        examTip: 'Pratique a fórmula de utilização: U = Throughput (op/s) × Tempo de Serviço (s).',
        resources: [
          { label: 'UNIVESP — Arquitetura de Computadores', url: 'https://apps.univesp.br/repositorio/' },
        ],
      },
      {
        id: 'sistemas-operacionais',
        title: '10. Sistemas Operacionais',
        relatedArea: 'Arquitetura e Infraestrutura',
        summary: 'Gerência de processos, memória, entrada/saída, sistemas de arquivos e virtualização.',
        topics: [
          'Arquiteturas de SO: monolítica, camadas, micronúcleo, cliente-servidor e máquinas virtuais',
          'Processos, threads, escalonamento de CPU, concorrência e deadlocks',
          'Gerência de memória: paginação, segmentação e memória virtual',
          'Virtualização: Hipervisor Tipo I (bare-metal) vs. Tipo II (sobre SO hospedeiro) e contêineres',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Hipervisor Tipo I:</strong> roda direto no hardware (ex.: VMware ESXi, KVM, Hyper-V).</li>
            <li><strong>Hipervisor Tipo II:</strong> roda como aplicativo/processo sobre um SO hospedeiro (ex.: VirtualBox). VMs mantêm isolamento e recuperação rápida via snapshots.</li>
          </ul>
        `,
        examTip: 'Em virtualização Tipo II, VMs mantêm isolamento e permitem recuperação rápida via snapshots.',
        resources: [
          { label: 'Operating Systems: Three Easy Pieces (OSTEP — Gratuito)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
        ],
      },
      {
        id: 'redes-distribuidos',
        title: '11. Redes de Computadores e Sistemas Distribuídos',
        relatedArea: 'Arquitetura e Infraestrutura',
        summary: 'Comunicação de dados, protocolos da Internet, computação em nuvem, grid e IoT.',
        topics: [
          'Modelos OSI (7 camadas) e TCP/IP (4/5 camadas)',
          'Protocolo IPv4: endereçamento, máscara de sub-rede, fragmentação (MTU) e campo TTL (evita loops)',
          'Protocolos TCP (orientado à conexão, confiável/sequenciado) vs. UDP, DNS, HTTP/HTTPS',
          'Computação em Nuvem (IaaS, PaaS, SaaS), Arquitetura em Grid e IoT (protocolos abertos e padronizados)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>IPv4:</strong> <code>TTL</code> evita loops infinitos de roteamento; <code>Máscara de sub-rede</code> verifica se o destino está na mesma rede local; roteadores podem fragmentar pacotes maiores que o <code>MTU</code>.</li>
            <li><strong>Nuvem (NIST):</strong> <em>IaaS</em> (infraestrutura sob demanda — ideal para demandas oscilantes); <em>PaaS</em> (plataforma para desenvolvedores); <em>SaaS</em> (software pronto por assinatura).</li>
          </ul>
        `,
        examTip: 'TTL evita loop infinito no roteamento IPv4, mas quem garante sequenciamento é o TCP.',
        resources: [
          { label: 'Cloudflare Learning — Fundamentos de Redes e Internet', url: 'https://www.cloudflare.com/pt-br/learning/network-layer/what-is-the-network-layer/' },
          { label: 'NIST — Definição de Cloud Computing', url: 'https://csrc.nist.gov/pubs/sp/800/145/final' },
        ],
      },
      {
        id: 'seguranca-info',
        title: '17. Segurança da Informação e de Sistemas de Informação',
        relatedArea: 'Segurança da Informação',
        summary: 'Proteção de ativos de informação contra ameaças internas e externas, alinhada a normas e legislação.',
        topics: [
          'Princípios da ISO/IEC 27002: Confidencialidade, Integridade, Disponibilidade (CID), Autenticidade e Legalidade',
          'Gestão de Riscos, Política de Segurança da Informação (PSI) e cultura organizacional',
          'Criptografia simétrica/assimétrica, certificados digitais, assinatura digital e controle de acesso',
          'Privacidade e proteção de dados pessoais (LGPD — Lei nº 13.709/2018)',
        ],
        detailsHtml: `
          <ul>
            <li><strong>CID + AL:</strong> <em>Confidencialidade</em> (sigilo/acesso autorizado), <em>Integridade</em> (não alteração indevida), <em>Disponibilidade</em> (acesso quando necessário), <em>Autenticidade</em> (identidade do emissor) e <em>Legalidade</em> (conformidade legal).</li>
            <li><strong>Assinatura Digital:</strong> garante autenticidade, integridade e não-repúdio usando chave privada do remetente.</li>
          </ul>
        `,
        examTip: 'Integridade = proteção contra alteração indevida (não acessibilidade); Segurança envolve pessoas, processos e TI.',
        resources: [
          { label: 'OWASP Top 10 — Segurança em Aplicações Web', url: 'https://owasp.org/www-project-top-ten/' },
          { label: 'CERT.br — Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
        ],
      },
    ],
  },
  {
    id: 'eixo-sociedade',
    color: '#6d28d9',
    title: '6. Informática, Sociedade e Formação Geral',
    subtitle: 'Impactos sociais da computação, ética, sustentabilidade e cidadania',
    nodes: [
      {
        id: 'info-sociedade',
        title: '20. Informática e Sociedade',
        relatedArea: 'Formação Geral',
        summary: 'Relação crítica entre tecnologia, mundo do trabalho, ética profissional, inclusão digital e cidades inteligentes.',
        topics: [
          'Impactos sociais e econômicos da automação, Inteligência Artificial e plataformas digitais (Gig Economy)',
          'Ética profissional, propriedade intelectual, software livre e responsabilidade socioambiental',
          'Cidades Inteligentes (Smart Cities): tecnologia + sustentabilidade + políticas públicas + inclusão',
          'Acessibilidade digital, letramento informacional e combate à desinformação',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Cidades Inteligentes:</strong> vão além da tecnologia; integram gestão, governança, políticas públicas, redução de CO₂/energia e inclusão social.</li>
            <li><strong>Gig Economy:</strong> trabalho mediado por plataformas digitais sem vínculo empregatício tradicional, gerando debates sobre proteção trabalhista.</li>
          </ul>
        `,
        examTip: 'Tema central tanto no Componente Específico quanto nas questões discursivas do ENADE.',
        resources: [
          { label: 'SBC — Sociedade Brasileira de Computação', url: 'https://www.sbc.org.br/' },
        ],
      },
      {
        id: 'formacao-geral',
        title: 'Formação Geral (15 questões no ENADE 2026)',
        relatedArea: 'Formação Geral',
        summary: 'Avalia formação cidadã, interpretação de textos/gráficos/mapas e visão crítica sobre temas contemporâneos.',
        topics: [
          'Sustentabilidade, meio ambiente, matriz energética e Objetivos de Desenvolvimento Sustentável (ODS)',
          'Direitos humanos, cidadania, diversidade, democracia (majoritária vs. consensual) e políticas públicas',
          'Saúde pública, desigualdade social, mobilidade urbana e cultura/patrimônio',
          'Resolução de questões de asserção-razão (I PORQUE II) e análise de gráficos e infográficos',
        ],
        detailsHtml: `
          <ul>
            <li><strong>Estratégia para Asserção-Razão (I PORQUE II):</strong> 1º) Avalie se I é verdadeira ou falsa isoladamente; 2º) Avalie se II é verdadeira ou falsa isoladamente; 3º) Apenas se ambas forem verdadeiras, teste se II explica a causa de I.</li>
          </ul>
        `,
        examTip: 'Em questões "I PORQUE II", valide cada proposição separadamente antes de checar a relação de causa.',
        resources: [
          { label: 'ONU Brasil — Objetivos de Desenvolvimento Sustentável (ODS)', url: 'https://brasil.un.org/pt-br/sdgs' },
          { label: 'INEP — Provas do ENADE', url: 'https://www.gov.br/inep/pt-br/areas-de-avaliacao/avaliacao-da-educacao-superior/enade' },
        ],
      },
    ],
  },
];
