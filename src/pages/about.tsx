import Head from "next/head"
import {
  BsFillBookmarkDashFill, BsCheck } from "react-icons/bs"
import Header from "../components/Header"

const  About = () => {
  return (
    <>
      <Head>
        <title>Clark Seguros - Quem Somos? </title>
        <meta name="description" content="Clark Seguros - About" />
      </Head>
      <Header />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="font-semibold text-slate-800 text-lg">
        Com muito planejamento caminhando para o sucesso.
      </div>
      <div className="relative py-10 w-full max-w-3xl">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-slate-400"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-800">
          <BsFillBookmarkDashFill className="h-5 w-5 text-teal-600"   />
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 text-center text-slate-800 max-w-3xl'>
        <div className='col-span-4 lg:col-span-8 md:col-span-12'>
          <div className='mb-6'>
            <div>
              <div className='inline'>
                <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 break-all'>
                  <div className='flex-col indent-8 text-left'>
                    <div className='flex flex-col justify-center mt-5 font-extralight'>
                      <p className="mb-3">
                          Com perfil consultivo e apostando na credibilidade adquirida ao longo de seus 25 anos
                      de atuação no mercado segurador, a Clark atua de forma a ofertar aos seus clientes uma
                      vasta gama de produtos e serviços de acordo com suas particularidades e necessidades
                        relacionadas às suas operações.
                      </p>
                      <p>
                        Suas áreas de atuação ampliaram-se ao longo dos anos e a Clark Corretora de Seguros se firmou
                      como especialista em gestão de riscos e no desenvolvimento de programas de seguros para empresas
                      de todos os segmentos econômicos ofertando serviços diferenciados, desde o momento da
                      pré-contratação de apólices de seguros perdurando ao longo do relacionamento técnico/comercial
                        com nossos clientes.
                      </p>
                    </div>
                  </div>
                  <div className='flex-col indent-8 text-left'>
                    <div className='flex flex-col justify-center mt-5 font-extralight'>
                      <p className="mb-3">
                        A Clark Corretora de Seguros preza por relacionamentos de longo prazo e, neste sentido,
                        busca estar à frente das necessidades de seus clientes, amparando-os de forma a ser uma
                        extensão de todas as áreas relacionadas à gestão de riscos e contratação de suas apólices
                        e benefícios.
                      </p>
                      <p>
                        “Com estrutura de atendimento dedicada, a CLARK desponibiliza e assegura um nível de
                        excelência em todas as atapas de relacionamento com o cliente, desde o imediato atendimento
                        às novas contratações e renovações de apólices até a assistência consultiva no suporte
                        em caso de sinistros. Para nós, cada cliente é único e, assim sendo, buscamos atende-lós
                        de forma individualizada com senso de urgência e excelência.“
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>

      <div className="relative py-5 w-full max-w-3xl">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-slate-400"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-800">
          <BsFillBookmarkDashFill className="h-5 w-5 text-teal-600"   />
          </span>
        </div>
      </div>
        
      <section className="font-semibold text-slate-800 mt-5 max-w-3xl text-start">
          <div className="self-start mb-3">
            Nossa Missão, Visão e Valores
          </div>
          <div className="font-extralight mb-2">
            <BsCheck className="h-5 w-5 text-teal-600 inline"  />
            <strong className="font-medium">MISSÃO</strong> - Oferecer aos clientes uma efetiva consultoria em seguros e
            gerenciamento de riscos, utilizando práticas inovadoras e soluções
            customizadas adequadas às suas necessidades específicas, com um
            atendimento personalizado e diferenciado.
          </div>
          <div className="font-extralight mb-2">
            <BsCheck className="h-5 w-5 text-teal-600 inline"  />
            <strong className="font-medium">VISÃO</strong> - Ser reconhecida nacionalmente como a melhor
            opção em gerenciamento de riscos e seguros, trabalhando de forma integrada ao cliente.
          </div>
          <div className="font-extralight mb-2">
            <BsCheck className="h-5 w-5 text-teal-600 inline"  />
            <strong className="font-medium">VALORES</strong> - Busca contínua da excelência em nossos
            serviços, objetivando superar as expectativas do cliente, trabalhando de forma
            transparente e prezando pela ética em nossas ações e pelo respeito a nossos clientes
            e parceiros de negócios.
          </div>

      </section>

      </main>
      
      
    </>
    
  )
}

export default About
