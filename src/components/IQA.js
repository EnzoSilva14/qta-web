function IQA() {
  return (
    <section id="iqa" className="section">
      <div className="container">
        <h2>Índice de Qualidade da Água (IQA)</h2>
        <div className="card">
          <h3>Parâmetros do IQA</h3>
          <p>O IQA é calculado com base nos seguintes parâmetros:</p>
          <ul>
            <li>Oxigênio Dissolvido (OD)</li>
            <li>Coliformes Termotolerantes</li>
            <li>pH</li>
            <li>Demanda Bioquímica de Oxigênio (DBO)</li>
            <li>Temperatura</li>
            <li>Nitrogênio Total</li>
            <li>Fósforo Total</li>
            <li>Turbidez</li>
            <li>Resíduos Totais</li>
          </ul>
          <p>
            Cada parâmetro tem um peso específico no cálculo do IQA, que varia de 0 a 100. Quanto maior o valor do IQA,
            melhor a qualidade da água.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IQA

