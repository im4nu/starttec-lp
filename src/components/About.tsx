import Image from "next/image";
import CardsList from "./CardsList";
import Button from "./ui/Button";
import Motion from "./motion/Motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full my-16 z-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24">
        <h2 className="title-gradient md:text-2xl 2xl:text-3xl font-bold lg:w-2/4 lg:text-start text-center">
          Por que a StartTec é líder em desenvolvimento de softwares desde 2017?
        </h2>
        <p className="lg:text-sm md:text-xs text-center text-gray-300 lg:w-1/4 lg:text-start">
          Entenda por que milhares de clientes decidem desenvolver projetos
          conosco e como chegamos tão longe!
        </p>
      </div>

      <CardsList />

      <div className="flex items-center w-full justify-center flex-col my-16">
        <h2 className="title-gradient text-3xl 2xl:text-4xl font-bold py-4">
          Criamos Soluções Completas!
        </h2>

        <div className="title-gradient flex flex-row flex-wrap gap-2 justify-center">
          <Image
            src={"/icons/mail.svg"}
            alt="Ícone de email"
            width={24}
            height={24}
          />{" "}
          <p className="text-2xl">Envio de email, </p>
          <Image
            src={"/icons/calendar.svg"}
            alt="Ícone de email"
            width={24}
            height={24}
          />{" "}
          <p className="text-2xl">Criação de eventos, </p>
          <Image
            src={"/icons/whatsapp.svg"}
            alt="Ícone de email"
            width={24}
            height={24}
          />{" "}
          <p className="text-2xl">Envio de mensagens</p>
        </div>

        <div className="flex flex-col bg-[#0E1330] w-full h-fit py-8 lg:py-0 lg:h-[512px] lg:flex-row items-center justify-center px-12 relative mt-16 rounded-xl border border-gray-800">
          <div className="flex flex-col items-start justify-start z-20 gap-6 xl:gap-12">
            <h3 className="font-semibold text-3xl title-gradient">
              Soluções performáticas
            </h3>
            <p className="w-2/3 text-sm">
              Sites feitos por nós carregam dentro de milésimos de segundos!
              Sabemos a necessidade da rapidez nos dias de hoje e quão
              importante é para você ter uma página fluida, sem travamentos
            </p>
          </div>

          <Motion direction="top" key={100}>
            <Image
              src={"/images/fast-loader.svg"}
              alt="Imagem de carregamento rápido"
              width={920}
              height={512}
              className="z-20 mt-6 lg:mt-0 object-cover"
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

        <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-between w-full my-12 ">
          <div className="flex w-full flex-col items-center py-12 border border-gray-800 relative bg-[#0E1330] lg:w-[35%] rounded-xl px-12 gap-8 h-[570px]">
            <Motion direction="top" key={101}>
              <Image
                src={"/images/methodus-print.svg"}
                alt="Print da tela do app methodus"
                width={271}
                height={306}
              />
            </Motion>

            <h2 className="text-3xl title-gradient font-semibold w-full text-start">
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

          <div className="flex w-full flex-col items-center pt-12 border border-gray-800 relative bg-[#0E1330] lg:w-[60%] rounded-xl px-12 gap-4 h-[570px]">
            <h2 className="text-3xl title-gradient font-semibold w-full text-start">
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

        <div className="flex flex-row items-center justify-center gap-12 ">
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

      <div className="flex h-fit items-center w-full justify-center flex-col relative rounded-xl gap-20 border border-gray-800 px-12 py-12 lg:pt-24 lg:py-0">
        <div className="flex flex-col h-fit justify-center lg:flex-row items-center lg:justify-between gap-12 lg:h-[400px]">
          <div className="flex w-full flex-col items-start justify-start lg:w-1/2 gap-4 h-full">
            <h2 className="title-gradient lg:text-3xl 2xl:text-4xl font-bold py-4">
              Transparência e Usabilidade
            </h2>
            <p className="text-gray-300">
              Sabemos que usuários contentes são o melhor marketing e é por isso
              que a nossa equipe de desenvolvimento e Design de Produto andam
              lado a lado utilizando as melhores tecnologias do mercado e boas
              práticas. Para que você tenha o melhor produto sempre.{" "}
              <span className="font-bold">
                Bonito, Rápido e Fácil de usar sempre!
              </span>
            </p>

            <Button variant="outlined">
              <p>Ver tecnologias utilizadas</p>
            </Button>
          </div>

          <Image
            alt="Imaged de código fonte"
            src={"/images/code.svg"}
            width={527}
            height={400}
            className="w-full lg:w-1/2 h-auto"
          />
        </div>

        <div className="flex h-fit flex-col lg:flex-row gap-12 lg:gap-0 justify-between w-full items-start lg:h-[400px]">
          <div className="flex flex-col items-center w-full lg:w-[45%] h-fit py-6 lg:py-0 lg:h-[90%] justify-center gap-4 px-8 pt-2 bg-black border border-gray-800 rounded-xl">
            <h3 className="title-gradient w-full text-start text-xl 2xl:text-2xl font-bold py-4">
              Reuniões de alinhamento
            </h3>
            <p className="text-gray-300 w-full text-start">
              Semanalmente ou diariamente são feitas reuniões com nossos
              clientes para avançar cada vez mais o nosso projeto
            </p>
            <Image
              alt="Ilustração de envio de email"
              src={"/images/send-mail.svg"}
              width={417}
              height={211}
            />
          </div>

          <div className="flex flex-col items-center w-full lg:w-[45%] h-fit py-6 lg:py-0 lg:h-[90%] justify-center gap-4 px-8 pt-2 bg-black border border-gray-800 rounded-xl">
            <h3 className="title-gradient w-full text-start text-xl 2xl:text-2xl font-bold py-4">
              Design de produto
            </h3>
            <p className="text-gray-300 w-full text-start ">
              A StartTec preza pela facilidade do usuário em usar um produto.
              Experiência do usuário para nós é algo primordial!
            </p>
            <Image
              alt="Ilustração de design de produto"
              src={"/images/product-design.svg"}
              width={487}
              height={211}
            />
          </div>
        </div>

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
          className="absolute right-0 bottom-0 z-10"
        />
      </div>
    </section>
  );
}
