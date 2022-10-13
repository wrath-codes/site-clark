import Head from "next/head"
import Header from "../components/Header"
import { BsFillFilePdfFill } from "react-icons/bs"

const Resolution = () => {
  return (
    <div>
      <Head>
        <title>Clark Corretora de Seguros - Resolução SUSEP 382/2020</title>
        <meta name="description" content="Resolução SUSEP 382/2020" />
      </Head>
      <Header />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center max-w-3xl">
      <div className="font-semibold text-slate-800 text-xl self-start mb-5">
      Resolução SUSEP 382/2020
        </div>
        <div className="font-extralight text-slate-800 text-xl text-center max-w-3xl">
          Dispõe sobre princípios a serem observados nas práticas de conduta
          adotadas pelas sociedades seguradoras, sociedades de capitalização,
          entidades abertas de previdência complementar e <span className="font-semibold">intermediários</span>, no
          que se refere ao relacionamento com o cliente, e sobre o uso do
          cliente oculto na atividade de supervisão da Susep, na forma definida
          por esta Resolução, e dá outras providências.
        </div>

        {// A div a seguir é o container do para o download do arquivo
        }
        <div className="flex flex-col justify-center mt-5 font-extralight">
          <p className="mb-3">
            Para acessar o arquivo, clique no botão abaixo:
          </p>
          <a
            href="https://www.in.gov.br/web/dou/-/resolucao-n-382-de-4-de-marco-de-2020-247020888"
            target="_blank"
            rel="noopener noreferrer"

            className="bg-slate-800 text-white font-semibold py-2 px-4 rounded"
          >
            <BsFillFilePdfFill className="inline-block mr-2" />
            Resolução SUSEP 382/2020
          </a>
        </div>

      </main>

    </div>
  )
}

export default Resolution
