import Head from "next/head"
import Header from "../components/Header"

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
          entidades abertas de previdência complementar e intermediários, no
          que se refere ao relacionamento com o cliente, e sobre o uso do
          cliente oculto na atividade de supervisão da Susep, na forma definida
          por esta Resolução, e dá outras providências.
        </div>
      </main>

    </div>
  )
}

export default Resolution
