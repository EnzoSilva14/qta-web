import Header from "./components/Header"
import Introducao from "./components/Introducao"
import Contexto from "./components/Contexto"
import QualidadeAgua from "./components/QualidadeAgua"
import IQA from "./components/IQA"
import Metodologia from "./components/Metodologia"
import Saneamento from "./components/Saneamento"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introducao />
        <Contexto />
        <QualidadeAgua />
        <IQA />
        <Metodologia />
        <Saneamento />
      </main>
      <Footer />
    </div>
  )
}

export default App

