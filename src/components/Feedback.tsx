"use client";

import Image from "next/image";
import FeedbackCard from "./FeedbackCard";
import { useState } from "react";

const data = [
  {
    name: "Eduardo Beltrão",
    image: "/icons/interne-logo.svg",
    company: "Gerente de TI - Grupo Interne Soluções em Saúde",
    feedback:
      "A parceria Starttec com o grupo Interne Soluções em Saúde teve início em 2021 e vem rendendo bons frutos, otimizando cada vez mais nossas entregas de desenvolvimento e promovendo uma rotina de testes mais robusta em nossos produtos. O time Starttec nos apoia com desenvolvimento nas linguagens Java, Angular, Node.js e muito mais que isso, com um excelente conhecimento de Gustavo Salgado CEO-Starttec na área da saúde e sensibilidade para entender as necessidades de seus clientes.",
  },
  {
    name: "João Pedro",
    image: "/images/avatar-2.png",
    company: "Amazon",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Pedro Henrique",
    image: "/images/avatar.png",
    company: "Meta",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export default function FeedbackSection() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  function handleNextFeedback() {
    if (currentFeedback < data.length - 1) {
      setCurrentFeedback(currentFeedback + 1);
    } else {
      setCurrentFeedback(0);
    }
  }
  function handlePreviousFeedback() {
    if (currentFeedback > 0) {
      setCurrentFeedback(currentFeedback - 1);
    } else {
      setCurrentFeedback(data.length - 1);
    }
  }
  return (
    <section
      id="feedback"
      className="flex flex-col items-center justify-center w-full"
    >
      <h2 className="title-gradient text-4xl 2xl:text-5xl font-bold text-center">
        O que os nossos clientes acham?
      </h2>
      <p className="text-sm text-gray-300 mt-4 text-center">
        Veja alguns depoimentos feitos por clientes nos últimos meses!
      </p>

      <div
        className={`flex flex-row items-center justify-center gap-3 ease-linear duration-300 ${
          currentFeedback === 0
            ? "ml-[calc(280px*2)] md:ml-[calc(392px*2)] lg:ml-[392px]"
            : ""
        }
        ${currentFeedback === 1 ? "" : ""}
        ${currentFeedback === 2 ? "mr-[calc(280px*2)] md:mr-[392px]" : ""}
        `}
      >
        {data.map((item, index) => (
          <FeedbackCard
            company={item.company}
            feedback={item.feedback}
            image={item.image}
            name={item.name}
            key={index}
            currentFeedback={currentFeedback}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row gap-6 mt-6">
        <button
          onClick={handlePreviousFeedback}
          className="flex bg-neutral-600 rounded-lg border-gray-600 p-3 hover:scale-105 ease-linear duration-300 hover:cursor-pointer"
        >
          <Image
            alt="seta para esquerda"
            src={"icons/right-arrow.svg"}
            width={24}
            height={24}
            className="rotate-180"
          />
        </button>

        <button
          onClick={handleNextFeedback}
          className="flex bg-neutral-600 rounded-lg border-gray-600 p-3 hover:scale-105 ease-linear duration-300 hover:cursor-pointer"
        >
          <Image
            alt="seta para direita"
            src={"icons/right-arrow.svg"}
            width={24}
            height={24}
          />
        </button>
      </div>
    </section>
  );
}
