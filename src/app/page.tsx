import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import FeedbackSection from "@/components/Feedback";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#060B27] relative w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-start w-[70%] text-white">
        <Navbar />

        <HeroSection />

        <Image
          src={"/icons/purple-circle.svg"}
          alt="Círculo roxo"
          height={226}
          width={274}
          className="absolute left-0 top-[233px] z-10 w-[730px] h-[730px]"
        />
        <Image
          src={"/icons/blue-circle.svg"}
          alt="Círculo azul"
          height={226}
          width={274}
          className="absolute right-0 top-[630px] z-10 w-[730px] h-[730px]"
        />

        <AboutSection />

        <FeedbackSection />

        <Banner />

        <ProductsSection />

        <footer className="flex flex-col items-center justify-center w-full mt-20 gap-6">
          <div className="flex flex-row items-center justify-between w-full xl:w-3/5">
            <div className="flex flex-col gap-6">
              <Image
                alt="Logomarca StartTec"
                src={"/icons/logo.svg"}
                width={155}
                height={60}
              />

              <form className="flex flex-col rounded-xl border border-gray-600 bg-neutral-600 gap-4 px-8 py-4 w-[300px]">
                <h2>Deixe o seu email, entramos em contato com você!</h2>

                <input
                  type="email"
                  className="rounded-2xl border border-gray-600 bg-transparent text-white pl-2 py-1"
                />

                <Button variant="contained" size="medium">
                  Enviar
                </Button>
              </form>
            </div>

            <div className="flex flex-col gap-2">
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
            <p className="text-xs">
              Todos os direitos reservba © StartTec Soluções | Design por
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

        <Image
          src={"/icons/purple-circle.svg"}
          alt="Círculo roxo"
          height={400}
          width={400}
          className="absolute left-0 bottom-0"
        />

        <Image
          src={"/icons/blue-circle.svg"}
          alt="Círculo azul"
          height={400}
          width={400}
          className="absolute right-0 bottom-0"
        />
      </div>
    </main>
  );
}
