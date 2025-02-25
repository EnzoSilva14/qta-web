import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
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
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Qualidade das Águas: Um Estudo Vital</h1>
            <p className="text-xl mb-8">
              Entenda a importância da qualidade da água em nossos rios e córregos para a saúde pública e o meio
              ambiente.
            </p>
            <Button asChild>
              <Link href="#contexto">Saiba mais</Link>
            </Button>
          </div>
        </section>

        <section id="contexto" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Contexto do Rio em Estudo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Localização e Características</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Informações sobre a localização e características do rio/córrego estudado.</p>
                  <Image
                    src="/foto_inicial_rio.jpeg"
                    alt="Mapa do rio"
                    width={400}
                    height={300}
                    className="mt-4 rounded-lg mx-auto"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Localização do rio e pontos de interesse.</p>
                  <Image
                    src="/foto_local_coleta.png"
                    alt="Mapa do rio"
                    width={600}
                    height={400}
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

            {/* Ajuste das caixas e imagens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 place-items-center">
              {/* pH */}
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

              {/* DBO */}
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

              {/* Temperatura */}
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

              {/* Nitrogênio */}
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

              {/* Fósforo */}
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

              {/* Coliformes */}
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
                  Realizamos diluições múltiplas para o cálculo do DBO para garantir resultados precisos em diferentes
                  concentrações de matéria orgânica.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="saneamento" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Saneamento na Região</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Situação Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Informações sobre o estado atual do saneamento na região do rio/córrego estudado.</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Cobertura de água tratada: 95%</li>
                    <li>Coleta de esgoto: 80%</li>
                    <li>Tratamento de esgoto: 60%</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Obras em Andamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Informações sobre obras de saneamento em andamento na sub-bacia.</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Ampliação da rede de coleta de esgoto</li>
                    <li>Construção de nova estação de tratamento</li>
                    <li>Revitalização de margens do rio</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
          <ul className="space-y-2">
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
        </div>
      </footer>
    </div>
  )
}