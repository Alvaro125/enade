const img = (file, alt) =>
  `<img src="./assets/${file}" alt="${alt}" class="question-img" />`;

export const diagrams = {
  '2017-q01': img('2017-q01-graficos.png', 'Gráficos de contribuições para a União Europeia e Reino Unido (ENADE 2017 Q1)'),
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
  '2017-q04': img('2017-q04-tirinha.png', 'Tirinha sobre televisão (ENADE 2017 Q4)'),
  '2017-q05': img('2017-q05-hidrogeis.png', 'Infográfico Por dentro dos hidrogéis (ENADE 2017 Q5)'),
  '2017-q08': img('2017-q08-ods.png', 'Objetivos de Desenvolvimento Sustentável - ODS (ENADE 2017 Q8)'),
  '2017-q11': img('2017-q11-der.png', 'Diagrama Entidade-Relacionamento do Museu (ENADE 2017 Q11)'),
  '2017-q13': img('2017-q13-cadeia.png', 'Cadeia de Valor com aplicações de TI (ENADE 2017 Q13)'),
  '2017-q17': img('2017-q17-defeitos.png', 'Gráfico de frequência mensal de defeitos (ENADE 2017 Q17)'),
  '2017-q19': img('2017-q19-grafo.png', 'Grafo de conexões aéreas entre capitais (ENADE 2017 Q19)'),
  '2017-q21': img('2017-q21-atividades.png', 'Diagrama de atividades UML do aplicativo de transporte (ENADE 2017 Q21)'),
  '2017-q23': img('2017-q23-conjuntos.png', 'Diagramas de conjuntos e consultas SQL equivalentes (ENADE 2017 Q23)'),
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
  '2017-q29': img('2017-q29-bpms.png', 'Diagrama do processo Revisão do plano de vendas (ENADE 2017 Q29)'),
  '2017-d4': img('2017-d4-cafezal.png', 'Grade bidimensional do cafezal (ENADE 2017 Discursiva 4)'),
  '2017-d5': img('2017-d5-uml.png', 'Diagrama de Classes UML - Tiro Esportivo (ENADE 2017 Discursiva 5)'),

  '2021-q02': img('2021-q02-hortalica.png', 'Infográfico Embrapa: A hortaliça é feia ou estragada? (ENADE 2021 Q2)'),
  '2021-q03': img('2021-q03-ciclovia.png', 'Charge sobre ciclovias e ciclofaixas (ENADE 2021 Q3)'),
  '2021-q05': img('2021-q05-mapa.png', 'Mapa de distribuição de suicídio indígena 10 a 14 anos (ENADE 2021 Q5)'),
  '2021-q09': img('2021-q09-uml.png', 'Diagrama de Classes UML Segurado e Seguro (ENADE 2021 Q9)'),
  '2021-q10': img('2021-q10-redes-sociais.png', 'Gráfico de benefícios do uso de redes sociais (ENADE 2021 Q10)'),
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
  '2021-q28': img('2021-q28-governanca.png', 'Fatores motivadores da Governança de TI (ENADE 2021 Q28)'),
  '2021-q29': img('2021-q29-der.png', 'Modelo Entidade-Relacionamento Clínica Médica (ENADE 2021 Q29)'),
  '2021-q32': img('2021-q32-sequencia.png', 'Diagrama de sequência SAMU e hospitais (ENADE 2021 Q32)'),
  '2021-d4': img('2021-d4-sistema.png', 'Representação genérica de um sistema (ENADE 2021 Discursiva 4)'),
  '2021-d5': img('2021-d5-uml.png', 'Diagrama de Casos de Uso UML (ENADE 2021 Discursiva 5)'),
};
