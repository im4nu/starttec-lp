"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Motion from "./motion/Motion";

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

export default function CardsList() {
  return (
    <div className="flex flex-row flex-wrap justify-between mt-9">
      {cardsData.map((card) => (
        <Motion key={card.id} direction="left">
          <motion.div className="flex flex-col gap-3 my-3 px-8 bg-[#0E1330] border-gray-300 text-white rounded-lg lg:w-[352px] lg:h-[224px] items-start justify-center duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
            <Image
              src={card.icon}
              alt={`Ícone de ${card.title}`}
              width={50}
              height={45}
              className="object-cover flex"
            />

            <p className="font-semibold text-sm lg:text-base">{card.title}</p>
            <p className="text-xs lg:text-sm">{card.description}</p>
          </motion.div>
        </Motion>
      ))}
    </div>
  );
}
