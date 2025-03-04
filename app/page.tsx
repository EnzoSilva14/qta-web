"use client"; // Se você estiver usando o app router do Next.js

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Array com dados históricos (placeholders)
const historicalData = [
  {
    year: "1937 - Rio Relativamente Limpo e Início da Canalização.",
    imageSrc: "/rio_1937.png",
    description: `
Condição da água: Em 1937, as águas do Rio Pinheiros eram consideradas limpas e usadas para lazer, esportes e até abastecimento industrial. Nessa época, o rio mantinha suas curvas naturais e uma vasta planície de inundação, cercado por mata atlântica e áreas rurais.

Níveis de poluição: Eram baixos - o rio ainda não sofria grande contaminação, devido à urbanização limitada e à ausência de descargas intensas de esgoto e efluentes industriais. Relatos indicam que a água era “relativamente livre de sujeira” e suportava uma rica vida aquática.

Projetos e impactos: A década de 1930 marcou o início de grandes obras de engenharia no Pinheiros. Em 1937 teve início a retificação (canalização) do rio, parte do chamado “Projeto da Serra”, para controle de cheias e geração de energia. Esse projeto (1937-1958) incluiu a construção da Usina Elevatória de Traição e a reversão do curso das águas para o Reservatório Billings, visando alimentar a usina hidrelétrica Henry Borden em Cubatão. 

Essas intervenções alteraram o curso natural do Pinheiros - o rio foi endireitado e suas várzeas drenadas, o que facilitou a ocupação urbana nas margens. Embora a qualidade da água ainda fosse boa em 1937, a canalização e o crescimento de bairros industriais ao longo do rio começaram a criar focos de poluição e reduziram a capacidade de autodepuração do rio (menos áreas alagáveis e vegetação ripária para filtrar poluentes).
    `
  },
  {
    year: "1957 - Urbanização Intensa e Degradação Acelerada.",
    imageSrc: "/rio_1957.png",
    description: `
Condição da água: Em 1957, após duas décadas de expansão urbana e industrial em São Paulo, a qualidade da água do Rio Pinheiros havia deteriorado significativamente. A cidade crescia rapidamente, e com ela aumentavam os despejos de esgoto doméstico sem tratamento e efluentes industriais diretamente no rio. Sem legislações ambientais eficazes na época, o Pinheiros tornou-se destino de efluentes industriais pesados e esgoto urbano, comprometendo severamente sua água.    

Níveis de poluição: Já nos anos 1950, observava-se acúmulo de poluentes. Estudos históricos apontam que “entre as décadas de 1950 e 1980, substâncias tóxicas de todo tipo, metais pesados e lodo de efluentes se acumularam no fundo do rio”. Isso indica que por volta de 1957 a água do Pinheiros já estava muito poluída, provavelmente imprópria para banho ou consumo, e a vida aquática começava a desaparecer. Peixes e outras formas de vida aquática tornaram-se escassos devido aos baixos níveis de oxigênio e alta carga orgânica resultante do esgoto. A situação era agravada pela perda das várzeas (aterradas para construção de avenidas marginais e indústrias) e pela redução da vazão em trechos devido ao fechamento do rio em canais, o que diminuía a oxigenação natural.
  
Projetos e impactos: Em 1957, as obras de retificação do Pinheiros estavam em fase final (concluídas no final dos anos 1950). O rio já corria em um canal artificial com margens consolidadas, e avenidas marginais começavam a surgir. A reversão de águas para a Billings também estava em operação: parte do volume do Pinheiros era bombeado para o reservatório para geração elétrica. Porém, com o passar do tempo, a poluição aumentou a tal ponto que essa operação passou a contaminar a Billings, levando à interrupção do bombeamento décadas depois (em 1992).
    `
  },
  {
    year: "2010 - Pico de Poluição e Rio Biologicamente “Morto”.",
    imageSrc: "/rio_2010.png",
    description: `
Condição da água: Em 2010, o Rio Pinheiros encontrava-se entre os rios urbanos mais poluídos do Brasil. Décadas de crescimento populacional sem infraestrutura de saneamento adequada transformaram-no em um “valão de esgoto a céu aberto”, muitas vezes descrito como biologicamente morto. Estudos ambientais e ONGs classificavam a água do Pinheiros como de qualidade “péssima” em praticamente todos os pontos monitorados na cidade de São Paulo. Por exemplo, análises do índice de qualidade da água (IQA) pela Fundação SOS Mata Atlântica por anos consecutivos apontavam o Pinheiros no pior nível de qualidade, com oxigênio dissolvido próximo de 0 mg/L (insuficiente para sustentar peixes) e Demanda Bioquímica de Oxigênio (DBO) extremamente elevada devido à carga orgânica do esgoto. De fato, reportagens destacavam que o rio tinha oxigênio zero em quase toda sua extensão (cerca de 25 km), caracterizando um ecossistema aquático praticamente sem vida.
    
Níveis de poluição: Neste período, o Pinheiros recebia diariamente dezenas de metros cúbicos de esgoto não tratado e poluição difusa (lixo, resíduos levados pelas chuvas). A água era escura e densa, com forte odor de sulfeto de hidrogênio (cheiro de “ovo podre”) devido à matéria orgânica em decomposição no leito. Sedimentos no fundo continham metais pesados e contaminantes acumulados ao longo do século XX. A situação era tão crítica que quaisquer projetos de revitalização enfrentavam um grande desafio de remover ou tratar esse lodo tóxico acumulado.
    
Projetos e contexto: Nos anos 2000, cresceu a pressão pública pela despoluição tanto do Pinheiros quanto do Rio Tietê. Embora o Projeto Tietê (iniciado nos anos 1990 com apoio internacional) tenha focado principalmente no rio Tietê, indiretamente incluía melhorias que afetariam o Pinheiros (expansão do tratamento de esgoto na região metropolitana). Ainda assim, em 2010 pouco resultado concreto era visto no Pinheiros. A consciência ambiental em torno da degradação do rio aumentou, preparando o terreno para ações mais robustas na década seguinte.
    `
  }
]

export default function Home() {
  // Índice do item histórico atual
  const [currentIndex, setCurrentIndex] = useState(0)

  // Função para ir para o ano anterior
  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? historicalData.length - 1 : prevIndex - 1
    )
  }

  // Função para ir para o próximo ano
  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === historicalData.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Dados do item histórico atual
  const currentData = historicalData[currentIndex]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-blue-600">
                Início
              </Link>
            </li>
            <li>
              <Link href="#contexto" className="text-gray-800 hover:text-blue-600">
                Contexto
              </Link>
            </li>
            <li>
              <Link href="#qualidade" className="text-gray-800 hover:text-blue-600">
                Qualidade da Água
              </Link>
            </li>
            <li>
              <Link href="#iqa" className="text-gray-800 hover:text-blue-600">
                IQA
              </Link>
            </li>
            <li>
              <Link href="#metodologia" className="text-gray-800 hover:text-blue-600">
                Metodologia
              </Link>
            </li>
            <li>
              <Link href="#saneamento" className="text-gray-800 hover:text-blue-600">
                Saneamento
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Seção principal */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Qualidade das Águas: Um Estudo Vital</h1>
            <p className="text-xl mb-8">
              Entenda a importância da qualidade da água em nossos rios e córregos para a saúde pública e o meio ambiente.
            </p>
            <Button asChild>
              <Link href="#contexto">Saiba mais</Link>
            </Button>
          </div>
        </section>

        {/* Nova Seção: História do Rio Pinheiros - aparece primeiro */}
        <section id="historia" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-semibold mb-8">História do Rio Pinheiros</h3>
            <div className="relative flex items-center justify-center bg-white shadow-md rounded-lg p-4 min-h-[500px] overflow-y-auto">
              {/* Botão para voltar */}
              <button
                onClick={handlePrev}
                className="absolute left-0 ml-2 text-3xl font-bold p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Anterior"
              >
                &larr;
              </button>

              {/* Conteúdo (foto + texto) */}
              <div className="text-center">
                <Image
                  src={currentData.imageSrc}
                  alt={`Foto de ${currentData.year}`}
                  width={500}
                  height={300}
                  className="mx-auto rounded object-contain"
                />
                <p className="mt-4 font-semibold text-lg">{currentData.year}</p>
                <p className="mt-2 text-left whitespace-pre-line">{currentData.description}</p>
              </div>

              {/* Botão para avançar */}
              <button
                onClick={handleNext}
                className="absolute right-0 mr-2 text-3xl font-bold p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Próximo"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Demais seções */}
        <section id="contexto" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Mapa e Localização do Rio em Estudo</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Localização do rio e pontos de interesse.</p>
                  <Image
                    src="/rio_localizacao.png"
                    alt="Mapa do rio"
                    width={800}
                    height={600}
                    className="mt-4 rounded-lg mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="qualidade" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Qualidade da Água</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gráfico histórico da qualidade da água ao longo dos anos.</p>
                  <div className="bg-gray-200 h-64 mt-4 rounded-lg flex items-center justify-center">
                    Gráfico Histórico
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Estado Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Informações sobre o estado atual da qualidade da água no rio/córrego.</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>pH: 7.2</li>
                    <li>Temperatura: 22°C</li>
                    <li>Turbidez: 5 NTU</li>
                    <li>Oxigênio Dissolvido: 8 mg/L</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="iqa" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Índice de Qualidade da Água (IQA)</h2>
            <Card>
              <CardHeader>
                <CardTitle>Parâmetros do IQA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">O IQA é composto por nove parâmetros com seus respectivos pesos:</p>
                <ul className="list-disc list-inside">
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
                <p className="mt-4">Cada parâmetro tem um peso específico e contribui para o cálculo final do IQA.</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 place-items-center">
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/ph.png"
                  alt="pH"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">pH</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/dbo.png"
                  alt="DBO"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">DBO</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/temperatura.png"
                  alt="Temperatura"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Temperatura</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/nitrogenio_total.png"
                  alt="Nitrogênio Total"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Nitrogênio</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/fosforo_total.png"
                  alt="Fósforo Total"
                  width={360}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Fósforo</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/coliformes_fecais.png"
                  alt="Coliformes Fecais"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Coliformes</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/oxigenio_dissolvido.png"
                  alt="Oxigênio Dissolvido"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Oxigênio Dissolvido</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/turbidez.png"
                  alt="Turbidez"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Turbidez</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/residuos_totais.png"
                  alt="Resíduos Totais"
                  width={340}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Resíduos Totais</p>
              </div>
            </div>
          </div>
        </section>

        <section id="metodologia" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Metodologia de Análise</h2>
            <Card>
              <CardHeader>
                <CardTitle>Processo de Análise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nossa metodologia de análise inclui várias etapas para garantir resultados precisos:</p>
                <ul className="list-disc list-inside mt-4">
                  <li>Coleta de amostras em diferentes pontos do rio</li>
                  <li>Análise de oxigênio dissolvido para avaliar a saúde do ecossistema aquático</li>
                  <li>Medição de pH para determinar a acidez ou alcalinidade da água</li>
                  <li>Avaliação da turbidez para entender a claridade da água</li>
                  <li>Análise de coliformes para detectar possível contaminação fecal</li>
                </ul>
                <p className="mt-4">
                  Realizamos diluições múltiplas para o cálculo do DBO para garantir resultados precisos em diferentes concentrações de matéria orgânica.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="saneamento" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Saneamento na Região</h2>
            <p className="mb-6 text-lg">
              A infraestrutura de saneamento desempenha um papel fundamental na qualidade de vida da população.
              Nesta seção, apresentamos os dados sobre a situação do saneamento na região estudada, bem como as
              iniciativas em andamento para sua melhoria.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Situação Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>O contexto de saneamento na região onde se encontra o ponto de monitoramento é:</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Cobertura de água tratada: 99,3%</li>
                    <li>Coleta de esgoto: 97,3%</li>
                    <li>Tratamento de esgoto: 73,1%</li>
                  </ul>
                  <p className="mt-4">
                    Embora os índices sejam relativamente altos, o tratamento de esgoto ainda apresenta desafios,
                    o que pode impactar a qualidade ambiental da região e a saúde pública.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/rio_2025.png"
                      alt="Rio Pinheiros 2025"
                      width={500}
                      height={300}
                      className="rounded-lg mx-auto h-[300px] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Obras em Andamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Atualmente, as seguintes obras de saneamento estão em andamento na sub-bacia:</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Expansão da rede de esgoto em áreas de baixa cobertura</li>
                    <li>Projetos de revitalização do Rio Pinheiros</li>
                    <li>Melhoria da infraestrutura de estações de tratamento</li>
                  </ul>
                  <p className="mt-4">
                    Essas iniciativas visam não apenas aumentar a coleta e o tratamento de esgoto, mas também
                    melhorar a qualidade da água e recuperar a biodiversidade local.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/obras_de_saneamento.png"
                      alt="Obras de saneamento em andamento"
                      width={500}
                      height={300}
                      className="rounded-lg mx-auto h-[300px] object-cover"
                    />
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>

        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside mt-4">
              <li>
                <a
                  href="http://www.tratabrasil.org.br"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trata Brasil
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/ana/pt-br"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agência Nacional de Águas
                </a>
              </li>
              <li>
                <a
                  href="https://www.sabesp.com.br/"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SABESP
                </a>
              </li>
            </ul>
            <ul className="list-disc list-inside mt-4">
              <li>
                <a
                  href="https://www.saneamentoambiental.com.br/noticias/projeto-novo-rio-pinheiros-ja-tratou-58-bilhoes-de-litros?utm_source=chatgpt.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projeto Novo Rio Pinheiros
                </a>
              </li>
              <li>
                <a
                  href="https://www.cetesb.sp.gov.br/"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CETESB - Companhia Ambiental do Estado de São Paulo
                </a>
              </li>
              <li>
                <a
                  href="https://www.saopaulo.sp.gov.br/"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Governo do Estado de São Paulo - Projetos de Saneamento
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}