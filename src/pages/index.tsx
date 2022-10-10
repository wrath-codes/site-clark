import { BsFillBookmarkDashFill } from 'react-icons/bs'
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import {IoIosPeople} from "react-icons/io";
import {RiBuilding2Fill} from "react-icons/ri";
import {GiShakingHands} from "react-icons/gi";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clark Corretora de Seguros</title>
        <meta name="description" content="Home Page Clark Seguros" />
      </Head>
      <Header />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-5xl font-extrabold leading-normal h-max text-slate-700 md:text-[5rem] my-auto ">
          Clark <span className="text-teal-600">Seguros</span>
        </h1>
        <p className="max-w-2xl text-md text-slate-800">Com perfil consultivo e apostando na credibilidade adquirida ao longo de seus 25 anos de atuação no mercado segurador, a Clark atua de forma a ofertar aos seus clientes uma vasta gama de produtos e serviços de acordo com suas particularidades e necessidades relacionadas às suas operações.</p>
        <div className="relative py-10 w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-slate-400"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-slate-800">
            <BsFillBookmarkDashFill className="h-5 w-5 text-teal-600"   />
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 text-center text-slate-800'>
          <div className='col-span-4 lg:col-span-8 md:col-span-12'>
            <div className='mb-6'>
              <div>
                <div className='inline'>
                  <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 text-center '>
                    <div className='flex-col'>
                      <div className='flex justify-center'>
                        <div className='flex items-center justify-center text-teal-600'>
                          <IoIosPeople className='h-28 w-28 transform transition duration-500 hover:scale-110' />
                        </div>
                      </div>
                      <div className="font-semibold mb-2">Seguros Pessoais</div>
                      <p>
                        A equipe de seguros pessoais da Clark disponibiliza
                        as melhores condições do mercado para proteção de
                        seu patrimônio e para o bem estar de sua família.
                      </p>
                    </div>
                    <div className='flex-col'>
                      <div className='flex justify-center'>
                        <div className='flex items-center justify-center text-teal-600'>
                          <RiBuilding2Fill className='h-28 w-28 transform transition duration-500 hover:scale-110' />
                        </div>
                      </div>
                      <div className="font-semibold mb-2">Seguros Empresariais</div>
                      <p>
                      Oferecemos aos nossos clientes diversos serviços e
											soluções, desenvolvidos de acordo com as
											necessidades específicas de suas empresas.
                      </p>
                    </div>
                    <div className='flex-col'>
                      <div className='flex justify-center'>
                        <div className='flex items-center justify-center text-teal-600'>
                          <GiShakingHands className='h-28 w-28 transform transition duration-500 hover:scale-110' />
                        </div>
                      </div>
                      <div className="font-semibold mb-2">Seguros Massificados</div>
                      <p>
                      A Clark desenvolve projetos cujo objetivo é a
											oferta de seguros para pessoas físicas,
											comercializados de forma massificada, através de
											projetos estruturados com varejistas, empresas de
											utilities, e-commerce.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
				  </div>
			  </div>
      </main>
    </>
  );
};

export default Home;
