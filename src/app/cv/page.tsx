
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'CV',
};

export default function Cv() {
  return (
    <div className="flex h-screen">
       
      <div className="m-auto container lg:pr-20  md:pt-20 md:pr-20 md:pb-20 md:pl-40 md:border-2 lg:border-2 border-blue-800 rounded-2xl ">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl mb-6 font-bold">
          Luan Ferreira Souza
        </h1>
        <div className="md:flex lg:flex justify-between">
          <h3 className="md:text-xl lg:text-xl flex gap-4 md:gap-16 lg:gap-16">
            Acesse:
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://github.com/luanfsouza"
              target="_blank"
            >
              perfil no GitHub
            </Link>
          </h3>
          <h3 className="md:text-xl lg:text-xl">(77) 98145-1593</h3>
        </div>
        <div className="md:flex lg:flex justify-between mb-6">
          <h3 className="md:text-xl lg:text-xl flex gap-4 md:gap-16 lg:gap-16 ">
            Acesse:
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://www.linkedin.com/in/luanzsouza/"
              target="_blank"
            >
              perfil no Linkedin
            </Link>
          </h3>
          <h3 className="md:text-xl lg:text-xl">luanferreira7777@gmail.com</h3>
        </div>
        <div className="flex flex-col gap-5 mb-6">
          <h2 className="font-bold text-white md:text-2xl lg:text-2xl">Sobre min</h2>
          <p className="md:text-xl lg:text-xl">
            Oi, sou Luan! Busco aplicar meus conhecimentos de desenvolvedor
            front-end na criação de interfaces e sistemas robustos, visando a
            melhor experiência possível para usuário. E desejo desenvolver minha
            carreira sob a supervisão e estímulo da empresa, comprometido com a
            inovação e boas práticas.
          </p>
        </div>
        <div className="flex flex-col gap-5 mb-6">
          <h2 className="font-bold text-white md:text-2xl lg:text-2xl">Habilidades</h2>
          <p className="md:text-xl lg:text-xl">
            <span className="text-gray-400 font-bold mr-5">Fortes:</span>
            HTML, CSS, Sass, JavaScript, TypeScript, React, Next, Redux, Redux
            ToolKit, Styled Components, Context API, Hooks, Node JS, Git,
            Firebase, NoSQL (MongoDB).
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="font-bold text-white md:text-2xl lg:text-2xl">Projetos</h2>
          <p className="md:text-xl lg:text-xl">
            <span className="text-gray-400 font-bold mr-5">
              Factory Clothing
            </span>
            | React , Next, Redux, MongoDB, Heroku |
          </p>
          <p className="md:text-xl lg:text-xl w-full flex flex-col md:flex-row lg:flex-row justify-between">
            Loja de roupas e acessórios masculinos e femininos.
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://factory-clothing.vercel.app"
              target="_blank"
            >
              acesse o site aqui
            </Link>
          </p>
          <ul className="md:text-xl lg:text-xl flex flex-col pl-10 gap-2">
            <li>
              State management do front-end feito Redux ToolKit e React Hooks.
            </li>
            <li>TypeScript utilizado com Next, Node JS.</li>
            <li>Sistema de autentificação feito com JWT.</li>
            <li>Estilização feita com Styled Components.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <p className="md:text-xl lg:text-xl">
            <span className="text-gray-400 font-bold mr-5">X Project</span>|
            React , Redux, Firebase, Api |
          </p>
          <p className="md:text-xl lg:text-xl w-full flex flex-col md:flex-row lg:flex-row justify-between">
            Aplicção web para monitoramento de preços de criptoativos.
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://x-project-kappa.vercel.app"
              target="_blank"
            >
              acesse o site aqui
            </Link>
          </p>
          <ul className="md:text-xl lg:text-xl flex flex-col pl-10 gap-2">
            <li>Integração dos dados através da API da Coingecko.</li>
            <li>TypeScript utilizado com Next.</li>
            <li>Autentificação feita com Firebase e Google OAuth.</li>
            <li>Estilização feita com Styled-Components.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <p className="md:text-xl lg:text-xl">
            <span className="text-gray-400 font-bold mr-5">
              Woman HQ Ecommerce
            </span>
            | React , MongoDB, Heroku |
          </p>
          <p className="md:text-xl lg:text-xl w-full flex flex-col md:flex-row lg:flex-row justify-between">
            Ecommerce de quadrinhos e mangas femininos.
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://woman-hq-ecommerce.vercel.app"
              target="_blank"
            >
              acesse o site aqui
            </Link>
          </p>
          <ul className="md:text-xl lg:text-xl flex flex-col pl-10 gap-2">
            <li>State management do front-end feito React Hooks.</li>
            <li>Design Ui/Ux para melhor experiência do usuário.</li>
            <li>SEO dinâmico com Next.</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
