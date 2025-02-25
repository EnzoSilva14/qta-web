function Saneamento() {
  return (
    <section id="saneamento" className="section">
      <div className="container">
        <h2>Saneamento na Região</h2>
        <div className="card">
          <h3>Situação Atual</h3>
          <p>O contexto de saneamento na região onde se encontra o ponto de monitoramento é:</p>
          <ul>
            <li>Cobertura de água tratada: [porcentagem]</li>
            <li>Coleta de esgoto: [porcentagem]</li>
            <li>Tratamento de esgoto: [porcentagem]</li>
          </ul>
        </div>
        <div className="card">
          <h3>Obras em Andamento</h3>
          <p>Atualmente, as seguintes obras de saneamento estão em andamento na sub-bacia:</p>
          <ul>
            <li>[Listar obras em andamento]</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Saneamento

