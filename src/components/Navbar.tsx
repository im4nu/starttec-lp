"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

const navData = [
  { label: "Início", href: "home" },
  { label: "Sobre", href: "about" },
  { label: "Feedback", href: "feedback" },
  { label: "Produtos", href: "products" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Seleciona todas as seções
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionBottom
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center w-full justify-center border-b border-gray-500 fixed h-[80px] bg-blur z-30">
      <div className="flex flex-row items-center justify-between w-[70%] max-w-7xl py-6">
        <Image
          src="/icons/logo.svg"
          width={110}
          height={44}
          alt="Logomarca StartTec"
        />

        <ul className="flex flex-row items-center justify-center gap-4">
          {navData.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center justify-center ease-in duration-500"
            >
              <a
                className={`font-semibold hover:text-white ease-in duration-500 ${
                  activeSection === item.href
                    ? "text-white text-sm"
                    : "text-gray-400 text-xs"
                }`}
                href={`#${item.href}`}
              >
                {item.label}
              </a>

              <div
                className={`${
                  activeSection === item.href
                    ? "w-[45px] bg-white h-[1px]"
                    : "w-[0px]"
                } ease-in duration-500`}
              ></div>
            </li>
          ))}
        </ul>

        <Button size="medium" variant="contained">
          Faça um teste
        </Button>
      </div>
    </nav>
  );
}
