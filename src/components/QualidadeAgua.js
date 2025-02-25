function QualidadeAgua() {
  return (
    <section id="qualidade" className="section">
      <div className="container">
        <h2>Qualidade da Água</h2>
        <div className="card">
          <h3>Histórico</h3>
          <p>Ao longo dos anos, a qualidade da água neste rio/córrego tem apresentado as seguintes tendências:</p>
          {/* Adicione um gráfico histórico aqui */}
        </div>
        <div className="card">
          <h3>Estado Atual</h3>
          <p>Atualmente, os principais indicadores de qualidade da água são:</p>
          <ul>
            <li>pH: [valor]</li>
            <li>Oxigênio Dissolvido: [valor]</li>
            <li>Turbidez: [valor]</li>
            <li>Coliformes: [valor]</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default QualidadeAgua

