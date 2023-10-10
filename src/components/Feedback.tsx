"use client";

import Image from "next/image";
import FeedbackCard from "./FeedbackCard";
import { useState } from "react";

const data = [
  {
    name: "Ericleiton Silva",
    image: "/images/avatar-1.png",
    company: "Google",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ni",
  },
  {
    name: "João Pedro",
    image: "/images/avatar-2.png",
    company: "Amazon",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ni",
  },
  {
    name: "Pedro Henrique",
    image: "/images/avatar.png",
    company: "Meta",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ni",
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
      className="flex flex-col items-center justify-center"
    >
      <h2 className="title-gradient lg:text-4xl 2xl:text-5xl font-bold text-center">
        O que os nossos clientes acham?
      </h2>
      <p className="text-sm text-gray-300">
        Veja alguns depoimentos feitos por clientes nos últimos meses!
      </p>

      <div
        className={`flex flex-row items-center justify-center gap-3 ease-linear duration-300 ${
          currentFeedback === 0 ? "ml-[392px]" : ""
        }
        ${currentFeedback === 1 ? "" : ""}
        ${currentFeedback === 2 ? "mr-[392px]" : ""}
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
