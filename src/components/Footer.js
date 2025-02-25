import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Links Úteis</h3>
        <ul>
          <li>
            <a href="http://www.tratabrasil.org.br" target="_blank" rel="noopener noreferrer">
              Trata Brasil
            </a>
          </li>
          <li>
            <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer">
              Agência Nacional de Águas
            </a>
          </li>
          <li>
            <a href="https://www.sabesp.com.br/" target="_blank" rel="noopener noreferrer">
              SABESP
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

