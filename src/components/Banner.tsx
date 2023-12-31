import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 w-4/5 gap-6 min-h-[400px] mt-20 rounded-xl border-gray-600 relative bg-neutral-600 px-12">
      <div className="flex flex-row items-center gap-12 z-20">
        {/* <Image
          alt="Ícone do linkedin"
          src={"/icons/linkedin.svg"}
          width={50}
          height={50}
        /> */}
        <Image
          alt="Ícone do instagram"
          src={"/icons/instagram.svg"}
          width={50}
          height={50}
        />
      </div>

      <h2 className="title-gradient text-2xl 2xl:text-3xl font-bold text-center z-20">
        Siga-nos no instagram
      </h2>

      <p className="text-sm text-gray-300 text-center z-20">
        Não deixe de conferir nossas novidades no instagram! Conteúdo
        constantemente atualizado para você ficar por dentro do que está
        acontecendo no mercado de tecnolgia e acompanhar a StarTec mais de
        perto!
      </p>

      <div className="flex flex-row items-center gap-3 md:gap-8 z-20">
        {/* <a
          href="#"
          className="px-4 md:px-8 py-3 text-sm md:text-base bg-[#0078D4] rounded-3xl hover:scale-105 hover:cursor-pointer ease-linear duration-300"
        >
          Linkedin
        </a> */}
        <a
          href="https://www.instagram.com/starttecsolucoes/"
          className="px-4 md:px-8 py-3 text-sm md:text-base bg-[#EA4969] rounded-3xl hover:scale-105 hover:cursor-pointer ease-linear duration-300"
        >
          Instagram
        </a>
      </div>

      <Image
        alt="ilustração de nuvens de fundo"
        src={"/images/bannerBg.svg"}
        width={800}
        height={800}
        className="hidden md:flex absolute top-0 left-0 w-full h-full object-cover animate-pulse"
      />

      <Image
        src={"/icons/blue-circle.svg"}
        alt="Ciruculo azul"
        width={250}
        height={250}
        className="absolute right-0 top-0 object-cover"
      />

      <Image
        src={"/icons/purple-circle.svg"}
        alt="Ciruculo roxo"
        width={250}
        height={250}
        className="absolute left-0 top-0 object-cover"
      />
    </div>
  );
}
