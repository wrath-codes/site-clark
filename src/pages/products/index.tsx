import Head from "next/head"
import React from 'react'
import Header from "../../components/Header"

import { FaCar, FaTooth, FaPlane, FaRegCalendarAlt, FaMobileAlt } from "react-icons/fa"
import { BiPlusMedical } from "react-icons/bi"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { GiTombstone } from "react-icons/gi"
import { IoIosSchool } from "react-icons/io"
import Link from "next/link"


interface IProduct {
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
  link_text: string;
}


const productsList = [
  {
    name: "Seguro de Automóvel",
    description: "Seguro total contra Roubo, Furto, Colisão, Incêndio e danos da natureza.",
    icon: <FaCar />,
    link: "/products/autom",
    link_text: "Solicite Aqui"
  },
  {
    name: "Plano de Saúde",
    description: "Os melhores planos de saúde do Brasil para cuidar de você e da sua família.",
    icon: <BiPlusMedical />,
    link: "/products/health",
    link_text: "Solicite Aqui"
  },
  {
    name: "Plano Dental",
    description: "Seu sorriso é a porta de entrada para novas oportunidades.",
    icon: <FaTooth />,
    link: "http://sulamericaodonto.com.br/clarkrio",
    link_text: "Solicite Aqui"
  },
  {
    name: "Seguro Viagem",
    description: "Com diversas coberturas e serviços, este seguro mantém sua tranquilidade e segurança por toda a viagem.",
    icon: <FaPlane />,
    link: "https://www.goaffinity.com.br/CLARKRI",
    link_text: "Contrate Aqui"
  },
  {
    name: "Seguro Por Assinatura",
    description: "Bllu é para você que não tem seguro do carro e seu veículo vale até R$ 60 mil reais. Clique e saiba mais.",
    icon: <FaRegCalendarAlt />,
    link: "https://assinatura.azulseguros.com.br/?utm_source=T3H9EJ&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_T3H9EJ&utm_content=BLLU_CLARK_SEGUROS&susep=T3H9EJ&origem=Site/products/autom",
    link_text: "Contrate Aqui"
  },
  {
    name: "Seguro Residencial",
    description: "Cobertura contra incêndio, danos elétricos e assistência 24h. Disponível 7 dias por semana. Contrate Agora.",
    icon: <BsFillHouseDoorFill />,
    link: "https://servicos.tokiomarine.com.br/massificados/cotador-rd-ot-digital/#/partner/516687cf-244c-42a3-bc92-172ab263ed71",
    link_text: "Contrate Aqui"
  },
  {
    name: "Seguro de Pessoas",
    description: "Você sabia que não precisa morrer para usar o seguro de vida? Conte com coberturas e serviços que vão além da morte.",
    icon: <GiTombstone />,
    link: "https://servicos.tokiomarine.com.br/sva/view/digital/vida-individual/#/home",
    link_text: "Contrate Aqui"
  },
  {
    name: "Seguro Portáteis",
    description: "Contrate aqui o seguro para seu celular, Tablet ou Notebook. Eles ficarão sempre protegidos contra danos e roubo.",
    icon: <FaMobileAlt />,
    link: "https://wwws.portoseguro.com.br/vendaonline/equipamentosportateis/home.ns?cod=c0676a86ca324727887d5f0eac89f7fb&utm_source=T3H9EJ&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_LN51YJ&utm_content=CLARK_SEGUROS#vo-lgpd-frm-step-identify",
    link_text: "Contrate Aqui"
  },
  {
    name: "Seguro Estagiários",
    description: "O seguro de Acidentes Pessoais ampara os estagiários e  seus familiares na ocorrência de eventos adversos com base na lei do estágio nº 11.788 de 25 de Setembro de 2008.",
    icon: <IoIosSchool />,
    link: "https://seguros.portalpasi.com.br/login?Q=Q4q9ZQRmNsES3r1xr01xql7qJLqazQIa11xE1gfVSEmGLTxVyud58Vimc6gsqYGCPfjdo37cP137V31TG/XXFN73EB6JWxXN67XQ+ivC0IXd4F427KFIZ6o7lPYgkm2P",
    link_text: "Contrate Aqui"
  }
]

const Product = ({ name, description, icon, link, link_text }: IProduct) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 text-center flex flex-col items-center shadow-md">
      <div className="text-clark text-7xl mb-2">
        {icon}
      </div>
      <div className="font-semibold text-slate-200 text-xl my-2">
        {name}
      </div>
      <div className="font-extralight text-white text-md">
        {description}
      </div>
      <Link href={link}>
        <a className="bg-clark text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-clarkHover transform transition duration-100 hover:scale-10">
          {link_text}
        </a>
      </Link>
    </div>
  )
}

const Products = () => {
  return (
    <div>

      <Head>
        <title>Clark Seguros - Quem Somos? </title>
        <meta name="description" content="Clark Seguros - About" />
      </Head>
      <Header />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center max-w-4xl">
        <div className="font-semibold text-slate-800 text-2xl self-center mb-10">
          Nossos produtos
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {productsList.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>

      </main>
    </div>
  )
}

export default Products
