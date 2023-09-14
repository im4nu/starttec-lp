"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const cardsData = [
  {
    id: 0,
    icon: "/icons/group.svg",
    title: "Proteção de dados",
    description:
      "Nossa prioridade é VOCÊ. Priorizamos o sigilo das informações do seu projeto e da sua ideia!",
  },
  {
    id: 1,
    icon: "/icons/handshake.svg",
    title: "Análise de requisitos",
    description:
      "Antes de iniciar qualquer projeto analisamos cuidadosamente a sua ideia e como podemos desenvolvê-la",
  },
  {
    id: 2,
    icon: "/icons/connections.svg",
    title: "Conexões com clientes",
    description:
      "Mais que apenas desenvolver a sua ideia, nós sempre queremos solucionar o seu problema! Sua satisfação é tudo para nós ",
  },
  {
    id: 3,
    icon: "/icons/document.svg",
    title: "Prototipagem",
    description:
      "Com a prototipagem você consegue ver o seu projeto funcionando no seu smartphone ou notebook semanas após iniciarmos ele! Tempo é dinheiro!",
  },
  {
    id: 4,
    icon: "/icons/chat.svg",
    title: "Alinhamento de ideias",
    description:
      " Contamos com um time de desenvolvimento e gestão de projeto que mantém contato com você do começo ao fim do projeto! Nunca fique com dúvidas",
  },
  {
    id: 5,
    icon: "/icons/message.svg",
    title: "Entrega final do produto",
    description:
      "Após o desenvolvimento entregamos o produto 100% funcional para você apenas compartilhar com seus clientes seu novo site, sistema ou app (Android e IOS)",
  },
];

export default function AboutSection() {
  const scrollRef = useRef(null);
  const cardVariants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
      },
    },
  };
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full my-16"
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

      <div className="flex flex-row flex-wrap justify-between gap-12 mt-12">
        {cardsData.map((card) => (
          <motion.div
            variants={cardVariants}
            key={card.id}
            ref={scrollRef}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className="flex flex-col gap-3 px-8 bg-[#0E1330] border-gray-300 text-white rounded-lg w-[400px] h-[255px] items-start justify-center duration-500 ease-in-out hover:scale-105 hover:cursor-pointer item">
              <Image
                src={card.icon}
                alt={`Ícone de ${card.title}`}
                width={50}
                height={45}
                className="object-cover flex"
              />

              <p className="font-semibold">{card.title}</p>
              <p className="text-sm">{card.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
