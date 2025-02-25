import "./Header.css"

function Header() {
  return (
    <header className="header">
      <nav className="container">
        <ul>
          <li>
            <a href="#introducao">Introdução</a>
          </li>
          <li>
            <a href="#contexto">Contexto</a>
          </li>
          <li>
            <a href="#qualidade">Qualidade da Água</a>
          </li>
          <li>
            <a href="#iqa">IQA</a>
          </li>
          <li>
            <a href="#metodologia">Metodologia</a>
          </li>
          <li>
            <a href="#saneamento">Saneamento</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

