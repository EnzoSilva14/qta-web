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
    topic1: "Condição da água:",
    topic1Description: `
Em 1937, as águas do Rio Pinheiros eram consideradas limpas e usadas para lazer, esportes e até abastecimento industrial. Nessa época, o rio mantinha suas curvas naturais e uma vasta planície de inundação, cercado por mata atlântica e áreas rurais.
    `,
    topic2: "Níveis de poluição:",
    topic2Description: `
Eram baixos - o rio ainda não sofria grande contaminação, devido à urbanização limitada e à ausência de descargas intensas de esgoto e efluentes industriais. Relatos indicam que a água era “relativamente livre de sujeira” e suportava uma rica vida aquática.
    `,
    topic3: "Projetos e impactos:",
    topic3Description: `
A década de 1930 marcou o início de grandes obras de engenharia no Pinheiros. Em 1937 teve início a retificação (canalização) do rio, parte do chamado “Projeto da Serra”, para controle de cheias e geração de energia. Esse projeto (1937-1958) incluiu a construção da Usina Elevatória de Traição e a reversão do curso das águas para o Reservatório Billings, visando alimentar a usina hidrelétrica Henry Borden em Cubatão.
    `,
    finalDescription: `
Essas intervenções alteraram o curso natural do Pinheiros - o rio foi endireitado e suas várzeas drenadas, o que facilitou a ocupação urbana nas margens. Embora a qualidade da água ainda fosse boa em 1937, a canalização e o crescimento de bairros industriais ao longo do rio começaram a criar focos de poluição e reduziram a capacidade de autodepuração do rio (menos áreas alagáveis e vegetação ripária para filtrar poluentes).
    `
  },
  {
    year: "1957 - Urbanização Intensa e Degradação Acelerada.",
    imageSrc: "/rio_1957.png",
    topic1: "Condição da água:",
    topic1Description: `
Em 1957, após duas décadas de expansão urbana e industrial em São Paulo, a qualidade da água do Rio Pinheiros havia deteriorado significativamente. A cidade crescia rapidamente, e com ela aumentavam os despejos de esgoto doméstico sem tratamento e efluentes industriais diretamente no rio. Sem legislações ambientais eficazes na época, o Pinheiros tornou-se destino de efluentes industriais pesados e esgoto urbano, comprometendo severamente sua água.
    `,
    topic2: "Níveis de poluição:",
    topic2Description: `
Já nos anos 1950, observava-se acúmulo de poluentes. Estudos históricos apontam que “entre as décadas de 1950 e 1980, substâncias tóxicas de todo tipo, metais pesados e lodo de efluentes se acumularam no fundo do rio”. Isso indica que por volta de 1957 a água do Pinheiros já estava muito poluída, provavelmente imprópria para banho ou consumo, e a vida aquática começava a desaparecer. Peixes e outras formas de vida aquática tornaram-se escassos devido aos baixos níveis de oxigênio e alta carga orgânica resultante do esgoto. A situação era agravada pela perda das várzeas (aterradas para construção de avenidas marginais e indústrias) e pela redução da vazão em trechos devido ao fechamento do rio em canais, o que diminuía a oxigenação natural.
    `,
    topic3: "Projetos e impactos:",
    topic3Description: `
Em 1957, as obras de retificação do Pinheiros estavam em fase final (concluídas no final dos anos 1950). O rio já corria em um canal artificial com margens consolidadas, e avenidas marginais começavam a surgir. A reversão de águas para a Billings também estava em operação: parte do volume do Pinheiros era bombeado para o reservatório para geração elétrica. Porém, com o passar do tempo, a poluição aumentou a tal ponto que essa operação passou a contaminar a Billings, levando à interrupção do bombeamento décadas depois (em 1992).
    `
  },
  {
    year: "2010 - Pico de Poluição e Rio Biologicamente “Morto”.",
    imageSrc: "/rio_2010.png",
    topic1: "Condição da água:",
    topic1Description: `
Em 2010, o Rio Pinheiros encontrava-se entre os rios urbanos mais poluídos do Brasil. Décadas de crescimento populacional sem infraestrutura de saneamento adequada transformaram-no em um “valão de esgoto a céu aberto”, muitas vezes descrito como biologicamente morto. Estudos ambientais e ONGs classificavam a água do Pinheiros como de qualidade “péssima” em praticamente todos os pontos monitorados na cidade de São Paulo. Por exemplo, análises do índice de qualidade da água (IQA) pela Fundação SOS Mata Atlântica por anos consecutivos apontavam o Pinheiros no pior nível de qualidade, com oxigênio dissolvido próximo de 0 mg/L (insuficiente para sustentar peixes) e Demanda Bioquímica de Oxigênio (DBO) extremamente elevada devido à carga orgânica do esgoto. De fato, reportagens destacavam que o rio tinha oxigênio zero em quase toda sua extensão (cerca de 25 km), caracterizando um ecossistema aquático praticamente sem vida.
    `,
    topic2: "Níveis de poluição:",
    topic2Description: `
Neste período, o Pinheiros recebia diariamente dezenas de metros cúbicos de esgoto não tratado e poluição difusa (lixo, resíduos levados pelas chuvas). A água era escura e densa, com forte odor de sulfeto de hidrogênio (cheiro de “ovo podre”) devido à matéria orgânica em decomposição no leito. Sedimentos no fundo continham metais pesados e contaminantes acumulados ao longo do século XX. A situação era tão crítica que quaisquer projetos de revitalização enfrentavam um grande desafio de remover ou tratar esse lodo tóxico acumulado.
    `,
    topic3: "Projetos e contexto:",
    topic3Description: `
Nos anos 2000, cresceu a pressão pública pela despoluição tanto do Pinheiros quanto do Rio Tietê. Embora o Projeto Tietê (iniciado nos anos 1990 com apoio internacional) tenha focado principalmente no rio Tietê, indiretamente incluía melhorias que afetariam o Pinheiros (expansão do tratamento de esgoto na região metropolitana). Ainda assim, em 2010 pouco resultado concreto era visto no Pinheiros. A consciência ambiental em torno da degradação do rio aumentou, preparando o terreno para ações mais robustas na década seguinte.
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
              <Link href="#mapa_e_localizacao" className="text-gray-800 hover:text-blue-600">
                Mapa e Localização
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
            <li>
              <Link href="#laboratorios" className="text-gray-800 hover:text-blue-600">
                Laboratórios
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
              Neste projeto, realizamos o monitoramento dos cursos de água do rio Pinheiros, córrego do Sapateiro e córrego Uberaba, elementos fundamentais para a ecologia e a qualidade de vida em São Paulo e regiões adjacentes. Esses corpos d'água, apesar de sua importância para os ecossistemas e para o uso humano, estão sujeitos a intensas pressões ambientais, decorrentes da poluição industrial, do despejo de esgoto e dos impactos da urbanização, sobretudo na capital paulista.
            </p>
            <p className="text-xl mb-8">
              Por meio desta análise, foi possível não apenas diagnosticar a situação atual da qualidade das águas, mas também avaliar a evolução dos parâmetros ao longo do tempo, considerando as variações sazonais - como períodos de chuva e seca - e os efeitos das intervenções antrópicas.
            </p>
            <p className="text-xl mb-8">
              O projeto aprofundou nosso entendimento acerca dos métodos utilizados para testar as amostras de água, evidenciando as etapas essenciais para a obtenção de valores precisos dos parâmetros que compõem o Índice de Qualidade da Água (IQA). Essa abordagem reforça a importância do tratamento adequado dos recursos hídricos, elemento vital para a sustentabilidade dos rios e córregos e para a saúde ambiental e pública.
            </p>
            <Button asChild>
              <Link href="#contexto">Saiba mais</Link>
            </Button>
          </div>
        </section>


        {/* Nova Seção: História do Rio Pinheiros - aparece primeiro */}
        <section id="contexto" className="bg-gray-50 py-16">
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
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-left">
                      <span className="font-bold whitespace-pre-line">{currentData.topic1}</span>
                      {" "}
                      <span>{currentData.topic1Description}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-left">
                      <span className="font-bold whitespace-pre-line">{currentData.topic2}</span>
                      {" "}
                      <span>{currentData.topic2Description}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-left">
                      <span className="font-bold whitespace-pre-line">{currentData.topic3}</span>
                      {" "}
                      <span>{currentData.topic3Description}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-left whitespace-pre-line">{currentData.finalDescription}</p>
                  </div>
                </div>
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
        <section id="mapa_e_localizacao" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Mapa e Localização do Rio em Estudo</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    O rio Pinheiros está localizado na região sudoeste da cidade de São Paulo e desempenha um papel fundamental na drenagem urbana, recebendo contribuições de diversos córregos e canais ao longo de sua extensão. O rio nasce do encontro do rio Guarapiranga com o rio Grande e deságua no rio Tietê. Percorrendo áreas altamente urbanizadas e industrializadas, o que intensifica os desafios de preservação e recuperação de suas águas. Na capital, os trechos mais sujos estão entre as pontes Jaguaré e Ari Torres. 
                  </p>
                  <Image
                    src="/rio_localizacao.png"
                    alt="Mapa do rio"
                    width={800}
                    height={600}
                    className="mt-4 rounded-lg mx-auto"
                  />
                </CardContent>

                <CardHeader>
                  <CardTitle>Extensão e Vazão Média</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A extensão aproximada do rio Pinheiros é de 25 km, desde suas nascentes, hoje canalizadas, até a confluência com o rio Tietê. Sua vazão média pode variar ao longo do ano, influenciada principalmente pelo regime de chuvas e pela quantidade de efluentes lançados em seu curso. Em períodos de estiagem, a vazão tende a ser menor, enquanto na época chuvosa ocorrem picos que podem levar ao transbordamento em algumas áreas, gerando problemas já conhecidos na cidade de São Paulo.
                  </p>
                  <p className="mb-4">
                    Ao longo de várias décadas o curso do rio foi sendo alterado como uma tentativa de controlar enchentes, por conta da ocupação urbana e por obras de saneamento também. Apesar de não existirem dados concretos sobre a diminuição do comprimento do rio pinheiros, diversos registros indicam que, antes das grandes obras de retificação e canalização realizadas principalmente na primeira metade do século XX, o curso original do rio era bem mais sinuoso e consideravelmente maior do que os cerca de 25 km atuais.
                  </p>
                  <p className="mb-4">
                    Em algumas publicações históricas, menciona-se que o Pinheiros teria tido algo em torno de 40 a 50 km de extensão, mas, com as sucessivas intervenções de engenharia (desvios, retificações e canalizações), sua extensão total foi gradualmente reduzida até chegar ao traçado atual.
                  </p>
                </CardContent>
                
                <CardHeader>
                  <CardTitle>Principais Afluentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Entre os principais afluentes do rio Pinheiros, destacam-se o córrego Uberaba e o córrego Sapateiro, que também estão sendo objeto de estudo neste projeto. Além deles, outros córregos menores contribuem para o aumento do volume de água, bem como para a entrada de poluentes, em função do lançamento de esgoto doméstico e industrial sem tratamento adequado. Essa rede de drenagem é determinante para a dinâmica hídrica da região, afetando tanto a qualidade quanto a quantidade de água disponível ao longo do rio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="qualidade" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Qualidade da Água</h2>
            <div className="grid md:grid-cols-1 gap-8 h-full">
              <Card>
                <CardHeader>
                  <CardTitle>Descrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A qualidade de um corpo d'água não pode ser determinada apenas por um único parâmetro. Vários fatores — como a concentração de oxigênio dissolvido, a presença de nutrientes (fósforo e nitrogênio), o nível de coliformes fecais, o pH, a turbidez, entre outros — interagem de forma complexa e influenciam diretamente o estado geral das águas. Para integrar e interpretar todos esses indicadores de maneira equilibrada, desenvolveu-se o Índice de Qualidade das Águas (IQA).</p>
                </CardContent>
                <CardContent>
                  <p>O IQA se baseia em uma fórmula que considera tanto o valor de qualidade de cada parâmetro (medido em campo) quanto a importância relativa que esse parâmetro possui para a saúde do ecossistema aquático e para o uso humano. Dessa forma, parâmetros mais críticos, como o oxigênio dissolvido, acabam recebendo um peso maior, garantindo que sua influência no resultado final seja proporcional à sua relevância ambiental e sanitária.</p>
                </CardContent>
                <CardContent>
                  <p>Essa abordagem permite uma avaliação mais completa e confiável da condição de um rio ou córrego, pois sintetiza diversas informações em um único número, que pode variar de 0 a 100.</p>
                </CardContent>
                <CardContent>
                  <p className="mb-2">
                    O IQA é calculado a partir de nove variáveis, cada uma com um peso específico (<em>w<sub>i</sub></em>)
                    e um valor de qualidade (<em>q<sub>i</sub></em>), conforme a fórmula abaixo:
                  </p>

                  {/* Fórmula em destaque */}
                  <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center border shadow-sm">
                    <p className="text-2xl font-bold">
                      IQA ={" "}
                      <span className="inline-block">
                        ∏<sub>i=1 até n</sub> (q<sub>i</sub>)<sup>w<sub>i</sub></sup>
                      </span>
                    </p>
                  </div>

                  <p className="mt-4">em que:</p>
                  <div className="h-auto rounded-lg flex flex-col space-y-4 mt-2">
                    <div>
                      <span className="font-bold">IQA:</span>{" "}
                      <span>Índice de Qualidade das Águas, variando de 0 a 100.</span>
                    </div>
                    <div>
                      <span className="font-bold">q<sub>i</sub>:</span>{" "}
                      <span>
                        qualidade do i-ésimo parâmetro, também variando de 0 a 100, obtida por meio de uma
                        “curva média de variação de qualidade”.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">w<sub>i</sub>:</span>{" "}
                      <span>
                        peso do i-ésimo parâmetro, um valor entre 0 e 1 que reflete a relevância desse
                        parâmetro na determinação global da qualidade da água.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">n:</span>{" "}
                      <span>
                        número de variáveis que entram no cálculo do IQA (para este estudo foram usados
                        9 parâmetros).
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-1 gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gráfico histórico da qualidade da água ao longo dos anos.</p>
                  <div className="h-max mt-4 rounded-lg flex items-center justify-center">
                    <Image
                      src="/grafico_IQA.png"
                      alt="Gráfico do IQA"
                      width={650}
                      height={300}
                      className="object-contain rounded-lg"
                      />
                  </div>
                </CardContent>
              </Card>
              {/* <Card>
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
                  <div className="h-max mt-4 rounded-lg flex items-center justify-center">
                    <Image
                      src="/class_do_IQA.png"
                      alt="Classificação do IQA"
                      width={340}
                      height={150}
                      className="object-contain rounded-lg"
                      />
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </section>

        <section id="iqa" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Parâmetros do IQA</h2>
            <div className="grid md:grid-cols-1 gap-8 h-full">
              <Card>
                <CardHeader>
                  <CardTitle>Parâmetros</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="h-128 rounded-lg flex items-start justify-center flex-col space-y-4">
                    <div>
                      <span className="font-bold whitespace-pre-line">1. Coliformes (peso 0,15)</span>
                      {" "}
                      <span>Os coliformes, especialmente os do grupo fecal, são indicadores biológicos de contaminação por esgoto doméstico ou outras fontes de poluição fecal. A presença elevada desses microrganismos representa risco à saúde humana e pode tornar a água imprópria para consumo ou recreação. Por sua relevância na identificação de condições sanitárias e potencial patogênico, o parâmetro recebe um peso de 0,15.</span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">2. pH (peso 0,12)</span>
                      {" "}
                      <span>
                        O pH mede o grau de acidez ou alcalinidade da água. A maioria dos organismos aquáticos se desenvolve em faixas de pH restritas, próximas da neutralidade (entre 6 e 8). Valores muito elevados ou baixos podem prejudicar o equilíbrio químico e a biodiversidade.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">3. DBO (peso 0,10)</span>
                      {" "}
                      <span>
                        A Demanda Bioquímica de Oxigênio (DBO) indica a quantidade de oxigênio necessária para a decomposição da matéria orgânica presente na água, refletindo a carga orgânica e a presença de poluentes.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">4. Nitrogênio Total (peso 0,10)</span>
                      {" "}
                      <span>
                        O nitrogênio total inclui todas as formas deste elemento (orgânico, amoniacal, nitrato e nitrito). Em excesso, pode desencadear a eutrofização e prejudicar a qualidade da água.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">5. Fósforo Total (peso 0,10)</span>
                      {" "}
                      <span>
                        O fósforo total avalia a soma de todas as formas de fósforo na água. Embora essencial, concentrações elevadas podem acelerar processos de eutrofização, levando à proliferação de algas e diminuição da qualidade da água.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">6. Temperatura (peso 0,10)</span>
                      {" "}
                      <span>
                        A temperatura influencia a solubilidade de gases, como o oxigênio, e o metabolismo dos organismos aquáticos. Mudanças acentuadas podem afetar os processos físicos, químicos e biológicos do ecossistema.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">7. Turbidez (peso 0,08)</span>
                      {" "}
                      <span>
                        A turbidez mede o grau de transparência da água, indicando a quantidade de partículas em suspensão, como sedimentos e matéria orgânica. Níveis elevados podem afetar a fotossíntese e reduzir a penetração de luz.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">8. Resíduo Total (peso 0,08)</span>
                      {" "}
                      <span>
                        O resíduo total engloba os sólidos presentes na água, tanto dissolvidos quanto em suspensão. Valores altos podem sugerir poluição por substâncias químicas ou excesso de matéria orgânica.
                      </span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">9. Oxigênio Dissolvido (peso 0,17)</span>
                      {" "}
                      <span>
                        O oxigênio dissolvido é crucial para a respiração dos organismos aquáticos. Níveis baixos podem indicar elevada carga orgânica e risco para a fauna, comprometendo a saúde do ecossistema.
                      </span>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Parâmetros obtidos no estudo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Abaixo estão os 9 parâmetros indicados e as respectivas curvas médias de variação de qualidade das águas. Os pontos em vermelho indicam os valores obtidos pelo grupo no estudo de cada parâmetro de uma amostra de água obtida em fevereiro de 2025:</p>
                  <div className="h-max mt-4 rounded-lg flex items-center justify-center">
                    <Image
                      src="/parametros_iqa.png"
                      alt="Parâmetros do IQA"
                      width={750}
                      height={150}
                      className="object-contain rounded-lg"
                      />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 place-items-center">
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/ph.png"
                  alt="pH"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">pH</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/dbo.png"
                  alt="DBO"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">DBO</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/temperatura.png"
                  alt="Temperatura"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Temperatura</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/nitrogenio_total.png"
                  alt="Nitrogênio Total"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Nitrogênio</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/fosforo_total.png"
                  alt="Fósforo Total"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Fósforo</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/coliformes_fecais.png"
                  alt="Coliformes Fecais"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Coliformes</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/oxigenio_dissolvido.png"
                  alt="Oxigênio Dissolvido"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Oxigênio Dissolvido</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/turbidez.png"
                  alt="Turbidez"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Turbidez</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center w-[400px] h-[250px]">
                <Image
                  src="/residuos_totais.png"
                  alt="Resíduos Totais"
                  width={700}
                  height={300}
                  className="object-contain"
                />
                <p className="mt-2 text-sm font-medium">Resíduos Totais</p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8 h-full mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Análise e Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="h-128 rounded-lg flex items-start justify-center flex-col space-y-4">
                    <div>
                      <span>Com base na análise dos gráficos históricos dos nove parâmetros, mesmo que a maioria das amostras tenha sido coletada nos meses de outubro ou novembro (com exceção do ano de 2025), é possível extrair algumas inferências importantes sobre o nosso curso de água. Essa padronização na época de coleta elimina as variações sazonais mais evidentes, permitindo uma comparação direta entre os valores obtidos ao longo dos anos, sem a interferência significativa de mudanças climáticas sazonais.</span>
                    </div>
                    <div>
                      <span className="font-bold whitespace-pre-line">Coliformes:</span>
                      {" "}
                      <span>
                      Ao analisar os valores de coliformes fecais é possível notar uma certa constância ao longo de vários anos, com exceção ao período de 2016 e 2017 onde houve um aumento considerável dos valores medidos desse parâmetro. Esse aumento pode ser resultado de uma combinação de fatores. O primeiro deles é a Transição pós-crise hídrica, marcando um período de retomada dos investimentos em saneamento. Esse processo de ajuste e a recuperação dos sistemas podem ter gerado instabilidades pontuais, refletidas no aumento dos níveis de contaminação. No ano de 2017, a região enfrentou fortes períodos de chuva o que pode ter aumentado o escoamento superficial, arrastando resíduos e contaminantes das áreas urbanas para os corpos d’água.
                      Além disso, no ano de 2024 e 2025 foi observado novamente altos valores desse parâmetro, inclusive muito superiores aos evidenciados nos anos de 2016 e 2017. Para o ano de 2024, os diversos eventos climáticos extremos podem ter sobrecarregado ou até prejudicado algumas infraestruturas de saneamento . Já para 2025, o alto valor obtido certamente indica uma poluição maior desses corpos d’água, porém um dos fatores que pode ter influenciado foi a data da coleta da amostra, que diferentemente dos demais anos, foi coletada no mês de fevereiro.
                      </span>
                    </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">pH:</span>{" "}
                      <span>
                        Ao longo dos anos os valores de pH apresentam grandes variações sem ser possível identificar uma tendência clara relacionada a eventos específicos. Entretanto, o valor medido para 2025 foi significativamente inferior, o que pode sugerir um aumento da acidez, possivelmente derivado do aumento da poluição e da chuva ácida.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">DBO:</span>{" "}
                      <span>
                        Enquanto a maioria dos anos manteve valores relativamente estáveis, 2025 mostrou um aumento notório na DBO, indicando uma maior carga orgânica e possivelmente maiores descargas de esgoto e resíduos industriais.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Nitrogênio Total:</span>{" "}
                      <span>
                        Os níveis de nitrogênio total variaram consideravelmente ao longo dos anos, mas o valor de 2025 permanece dentro da variação típica observada, sugerindo que, apesar de flutuações, não houve alterações drásticas para esse parâmetro.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Fósforo Total:</span>{" "}
                      <span>
                        Similarmente ao nitrogênio, os níveis de fósforo total em 2025 estão alinhados com a tendência dos anos anteriores, indicando que a concentração desse nutriente manteve-se estável dentro dos parâmetros normais.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Temperatura:</span>{" "}
                      <span>
                        A temperatura mostrou uma variação menor historicamente, mas em 2025 foi registrada uma elevação de cerca de 8 ºC em comparação aos anos anteriores, o que pode ser atribuído tanto ao aquecimento global quanto a uma coleta realizada em condições incomuns.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Turbidez:</span>{" "}
                      <span>
                        Observa-se que a turbidez se manteve bastante estável, variando entre 20 e 40, com exceção de picos em anos específicos como 2012. O valor de 2025 se enquadra entre os menores registrados, possivelmente indicando condições de menor sedimentação ou melhor gerenciamento ambiental local.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Resíduos Totais:</span>{" "}
                      <span>
                        Os valores de resíduos totais se mantiveram consistentes, variando entre 200 e 300 mg/L. A medição em 2025 permanece dentro dessa faixa, sugerindo que não houve um aumento significativo na presença de sólidos totais.
                      </span>
                      </div>
                      <div>
                      <span className="font-bold whitespace-pre-line">Oxigênio Dissolvido:</span>{" "}
                      <span>
                        Este parâmetro apresentou valores extremamente altos em 2012 e 2013, provavelmente devido a conversões incorretas. Em 2025, embora tenha havido uma variação que pode ser atribuída tanto a alterações na coleta quanto às condições ambientais, o nível registrado foi de 81%, valor que merece atenção para a interpretação dos dados.
                      </span>
                      </div>
                </div>
                </CardContent>
              </Card>
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
        {/* Seção: Descrição dos Laboratórios */}
        <section id="laboratorios" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Descrição dos Laboratórios</h2>
            <p className="text-lg mb-8">
              Nesta seção, detalhamos os procedimentos realizados para a obtenção dos parâmetros essenciais que compõem o Índice de Qualidade das Águas (IQA). Cada laboratório foca em análises específicas, garantindo uma avaliação abrangente e precisa da qualidade dos corpos d’água estudados.
            </p>
            <div className="grid md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lab 1 – Nitrogênio, Sólidos Totais e Turbidez</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Nitrogênio Amoniacal e Orgânico</h3>
                  <p>
                    A determinação do nitrogênio (nas formas amoniacal e orgânica) é essencial para avaliar o potencial de eutrofização da água. Inicialmente, 100 ml da amostra foram submetidos ao método Kjeldahl, com a adição de 0,02 ml de ácido sulfúrico concentrado e 0,03 g de HgSO₄ como catalisador. O aquecimento a 120°C por 30 minutos promoveu a digestão, convertendo o nitrogênio orgânico em amônio. Após a neutralização com NaOH e destilação (mantendo o pH adequado para que o NH₃ fosse liberado), a titulação com H₂SO₄ 0,0005M (utilizando cerca de 16,6 ml) permitiu o cálculo da concentração, que foi de 5,81 mg/L.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Turbidez</h3>
                  <p>
                    A turbidez indica a quantidade de partículas em suspensão e, portanto, a claridade da água. Com base na curva experimental que relaciona a absorbância (medida a 600 nm) com a turbidez, definida pela equação <span className="font-mono">Abs = 0,00108 · T - 0,0018</span>, e utilizando o valor de Abs = 0,021, determinou-se uma turbidez de aproximadamente 21,11 NTU.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Sólidos Totais</h3>
                  <p>
                    A concentração de sólidos totais foi determinada pela evaporação de 50 ml da amostra e pesagem do resíduo. Utilizando a fórmula <span className="font-mono">ST = (A - B) · 1000 / Vol</span> – onde A é o peso do béquer após a evaporação, B o peso do béquer vazio e Vol o volume da amostra – obteve-se um valor de 276 mg/L.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 2 – Fósforo, DBO e Coliformes Fecais</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Fósforo Total</h3>
                  <p>
                    Para a determinação do fósforo total, 50 ml da amostra foram digeridos com 1 ml de ácido sulfúrico e 5 ml de ácido nítrico (65%), aquecidos a 105°C por 30 minutos. Após resfriamento, a solução foi neutralizada e diluída, e 25 ml foram misturados com 8 ml de solução reativa, formando um complexo colorido (azul de molibdênio). A absorbância, medida a 870 nm, indicou uma concentração de fósforo de 0,790 mg/L.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Demanda Bioquímica de Oxigênio (DBO)</h3>
                  <p>
                    A DBO, que mede a quantidade de matéria orgânica biodegradável, foi determinada diluindo a amostra em diferentes proporções (25x, 50x e 100x), sendo a diluição 100x a escolhida devido à alta carga orgânica. Após 5 dias de incubação e medição do oxigênio dissolvido inicial e final, a DBO foi calculada pela fórmula <span className="font-mono">DBO = (OD inicial - OD final) · 100</span>, resultando em 156 mg/L.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Cálculo de Coliformes Fecais</h3>
                  <p>
                    Para a contagem de coliformes fecais, foi utilizado o método Colipaper. A amostra foi diluída 100 vezes e aplicada na cartela de gel. Após o período de incubação, a contagem média foi de 5 colônias por quadrado. Multiplicando-se esse valor por 6400 (fator de conversão) e pelo fator de diluição, obteve-se um resultado de 3.200.000 UFC/100 ml. Além disso, foram coletados dados de pH e temperaturas da amostra e ambiente para auxiliar no cálculo do IQA.
                  </p>
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