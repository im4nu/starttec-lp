import ProductCard from "./ProductCard";

const data = [
  {
    title: "StDoctor - Sistema de Gestão de Clínicas",
    description:
      "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    image: "/images/stDoctor.svg",
    launchDate: "8 de fev 2018",
    link: "/item-1",
    id: 0,
  },
  {
    title: "StartMessage - Sistema de envio de mensagens",
    description:
      "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    image: "/images/startMessage.svg",
    launchDate: "8 de fev 2018",
    link: "/item-2",
    id: 1,
  },
  {
    title: "EventoSmart - Sistema de gestão de feiras e eventos",
    description:
      "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    image: "/images/methodus.svg",
    launchDate: "14 de set 2023",
    link: "/item-3",
    id: 2,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="flex flex-col items-center justify-center mt-20"
    >
      <div className="flex flex-row items-center justify-between gap-24 w-full">
        <h2 className="title-gradient lg:text-4xl 2xl:text-5xl font-bold">
          Confira alguns dos nossos produtos
        </h2>
        <a
          href="#"
          className="rounded-2xl bg-main px-4 py-2 text-sm hover:scale-105 hover:cursor-pointer ease-linear duration-300"
        >
          Ver todos
        </a>
      </div>

      <div className="flex flex-row items-center justify-center gap-12 mt-6">
        {data.map((item) => (
          <ProductCard
            description={item.description}
            image={item.image}
            launchDate={item.launchDate}
            link={item.link}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}
