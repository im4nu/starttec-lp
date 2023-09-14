import Image from "next/image";
import AboutCards from "./ui/AboutCards";
import Button from "./ui/Button";
import Motion from "./motion/Motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full my-16 z-20"
    >
      <div className="flex flex-row items-center justify-between gap-24">
        <h2 className="title-gradient text-4xl font-bold w-2/4">
          Por que a StartTec é líder em desenvolvimento de softwares desde 2017?
        </h2>
        <p className="text-sm text-gray-300 w-1/4">
          Entenda por que milhares de clientes decidem desenvolver projetos
          conosco e como chegamos tão longe!
        </p>
      </div>

      <AboutCards />

      <div className="flex items-center w-full justify-center flex-col my-16">
        <h2 className="title-gradient text-4xl font-semibold">
          Criamos Soluções Completas!
        </h2>

        <p className="title-gradient text-2xl">
          Envio de email, Criação de eventos, Envio de mensagens
        </p>

        <div className="flex bg-[#0E1330] w-full h-[512px] flex-row items-center justify-center px-12 relative mt-16 rounded-xl border-gray-300">
          <div className="flex flex-col items-start justify-start z-20 gap-6 xl:gap-12">
            <h3 className="font-semibold text-3xl">
              Criamos soluções performáticas
            </h3>
            <p className="w-2/3 text-sm">
              Sites feitos por nós carregam dentro de milésimos de segundos!
              Sabemos a necessidade da rapidez nos dias de hoje e quão
              importante é para você ter uma página fluida, sem travamentos
            </p>
            <Button variant="outlined" size="medium">
              Saber mais
            </Button>
          </div>

          <Motion direction="top" key={100}>
            <Image
              src={"/images/fast-loader.svg"}
              alt="Imagem de carregamento rápido"
              width={920}
              height={512}
              className="z-20 object-cover"
            />
          </Motion>

          <Image
            src={"/icons/purple-circle.svg"}
            alt="Ciruculo roxo"
            width={300}
            height={300}
            className="absolute left-0 top-0 z-10"
          />

          <Image
            src={"/icons/blue-circle.svg"}
            alt="Ciruculo azul"
            width={300}
            height={300}
            className="absolute right-0 top-0 z-10"
          />
        </div>

        <div className="flex flex-row items-center justify-between w-full my-12">
          <div className="flex flex-col items-center py-12 relative bg-[#0E1330] w-[35%] rounded-xl border-gray-300 px-12 gap-8 h-[570px]">
            <Motion direction="top" key={101}>
              <Image
                src={"/images/methodus-print.svg"}
                alt="Print da tela do app methodus"
                width={271}
                height={306}
              />
            </Motion>

            <h2 className="text-3xl font-semibold w-full text-start">
              Aplicativos android e ios
            </h2>
            <p className="text-sm w-full text-start">
              Criamos soluções completas que variam desde Websites e Sistemas
              até Aplicativos móveis para android e ios
            </p>

            <Image
              src={"/icons/yellow-circle.svg"}
              alt="Ciruculo amarelo"
              width={300}
              height={300}
              className="absolute right-0 top-0 z-10"
            />

            <Image
              src={"/icons/purple-circle.svg"}
              alt="Ciruculo Roxo"
              width={300}
              height={300}
              className="absolute left-0 bottom-0 z-10"
            />
          </div>

          <div className="flex flex-col items-center pt-12 relative bg-[#0E1330] w-[60%] rounded-xl border-gray-300 px-12 gap-4 h-[570px]">
            <h2 className="text-3xl font-semibold w-full text-start">
              Criação, Hospedagem e Manutenção
            </h2>
            <p className="text-sm w-full text-start">
              Sim! Nós cuidamos de tudo para que você foque realmente no que
              importa, A sua ideia! Deixe a parte chata e complicada conosco!
            </p>
            <Motion direction="top" key={102}>
              <Image
                src={"/images/folders.svg"}
                alt="Pastas de arquivos"
                width={580}
                height={390}
              />
            </Motion>

            <Image
              src={"/icons/yellow-circle.svg"}
              alt="Ciruculo amarelo"
              width={300}
              height={300}
              className="absolute right-0 top-10 z-10"
            />

            <Image
              src={"/icons/purple-circle.svg"}
              alt="Ciruculo Roxo"
              width={300}
              height={300}
              className="absolute left-0 bottom-10 z-10"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-12">
          <Button variant="contained" size="large">
            Visitar algumas de nossa soluções
          </Button>

          <Button variant="outlined" size="medium">
            <Image
              alt="Seta para direita"
              src={"/icons/right-arrow.svg"}
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
