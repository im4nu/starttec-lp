import Image from "next/image";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-20 gap-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-3/5">
        <div className="flex flex-col gap-6">
          <Image
            alt="Logomarca StartTec"
            src={"/icons/logo.svg"}
            width={155}
            height={60}
          />

          <form className="flex flex-col rounded-xl border border-gray-600 bg-neutral-600 gap-4 px-8 py-4 w-[300px]">
            <h2 className="text-sm md:text-base">
              Deixe o seu email, entramos em contato com você!
            </h2>

            <input
              type="email"
              className="rounded-2xl border border-gray-600 bg-transparent text-white pl-2 py-1"
            />

            <Button variant="contained" size="large">
              Enviar
            </Button>
          </form>
        </div>

        <div className="flex-col gap-2 hidden md:flex">
          <h2 className="text-lg">Navegue</h2>
          <a
            className="text-sm hover:cursor-pointer hover:text-white text-gray-300 ease-linear duration-300"
            href="#home"
          >
            Início
          </a>
          <a
            className="text-sm hover:cursor-pointer hover:text-white text-gray-300 ease-linear duration-300"
            href="#about"
          >
            Sobre
          </a>
          <a
            className="text-sm hover:cursor-pointer hover:text-white text-gray-300 ease-linear duration-300"
            href="#feedback"
          >
            Depoimentos
          </a>
          <a
            className="text-sm hover:cursor-pointer hover:text-white text-gray-300 ease-linear duration-300"
            href="#products"
          >
            Produtos
          </a>
        </div>
      </div>

      <div className="flex border border-gray-600 h-[1px] w-full" />

      <div className="flex flex-row items-start justify-start w-full mb-6">
        <p className="text-xs text-center">
          Todos os direitos reservados © StartTec Soluções | Design por
          <a
            className="underline ml-1"
            href="https://www.linkedin.com/in/m4nu/"
            target="_blank"
          >
            Emmanuel Rodrigues
          </a>
        </p>
      </div>
    </footer>
  );
}
