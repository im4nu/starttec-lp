import ProductCard from "./ProductCard";

const data = [
  {
    title: "StDoctor - Sistema de Gestão de Clínicas",
    description:
      "Cuidamos da sua clínica com excelência para que seu foco seja voltado para o que mais importa, a saúde dos seus pacientes.",
    image: "/images/stDoctor.svg",
    launchDate: "8 de fev 2018",
    link: "https://st-doctor-lp.vercel.app/",
    id: 0,
  },
  {
    title: "StartMessage - Sistema de envio de mensagens",
    description: "Sistema de disparo de mensagens automáticas.",
    image: "/images/startmessage.png",
    launchDate: "8 de fev 2018",
    link: "https://www.startmessage.com.br/",
    id: 1,
  },
  {
    title: "HubDpo - Gerenciamento de dados pessoais ",
    description:
      "Evite multas severas pela não adequação DA SUA ORGANIZAÇÃO À LGPD!",
    image: "/images/hub-dpo.png",
    launchDate: "14 de set 2023",
    link: "https://www.hubdpo.com.br/",
    id: 2,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="flex flex-col items-center justify-center mt-20 w-full"
    >
      <div className="flex flex-row items-center justify-between gap-6 md:gap-24 w-full">
        <h2 className="title-gradient text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold lg:py-2">
          Confira alguns dos nossos produtos
        </h2>
        <a
          href="#"
          className="rounded-3xl bg-main py-4 text-sm hover:scale-105 hover:cursor-pointer ease-linear duration-300 w-[180px] text-center"
        >
          Ver todos
        </a>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-6 w-full">
        {data.map((item) => (
          <ProductCard
            description={item.description}
            image={item.image}
            launchDate={item.launchDate}
            link={item.link}
            title={item.title}
            key={item.id}
            identifier={item.id}
          />
        ))}
      </div>
    </section>
  );
}
