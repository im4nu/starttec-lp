"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import LinkDemo from "./ui/Link";
import Link from "next/link";

const navData = [
  { label: "Início", href: "home" },
  { label: "Sobre", href: "about" },
  { label: "Feedback", href: "feedback" },
  { label: "Produtos", href: "products" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Seleciona todas as seções
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 600;
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
    <nav className="flex flex-col lg:flex-row items-center w-full justify-center border-b border-gray-500 fixed lg:h-[80px] bg-blur z-30">
      <div className="flex flex-row items-center justify-between w-[70%] max-w-7xl py-6">
        <Image
          src="/icons/logo.svg"
          width={110}
          height={44}
          alt="Logomarca StartTec"
        />

        <ul className="hidden lg:flex flex-row items-center justify-center gap-4">
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

        <Link
          href={`http://wa.me/558198101171?text=${encodeURIComponent(
            `Olá! Venho do site da StartTec e gostaria de fazer um orçamento.`
          )}`}
          target="_blank"
          className="flex items-center justify-center rounded-[36px] text-white px-8 py-4 hover:scale-105 hover:cursor-pointer ease-linear duration-300 text-xs bg-main"
        >
          Fale conosco
        </Link>

        <button
          onClick={() => setMobileMenu((current) => !current)}
          className="flex lg:hidden flex-row items-center justify-center"
        >
          <Image
            src={`/icons/${mobileMenu ? "close.svg" : "menu.svg"}`}
            width={32}
            height={32}
            alt="Ícone de menu"
          />
        </button>
      </div>

      <ul
        className={`lg:hidden absolute bg-white flex-col w-full items-center justify-center gap-4 ease-linear duration-500 py-6 ${
          mobileMenu ? "top-[92px] opacity-100" : "-top-[350px] opacity-0"
        }`}
      >
        {navData.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center w-full justify-center ease-in duration-500 gap-2"
          >
            <a
              className={`font-semibold ease-in w-full py-2 text-center duration-500 ${
                activeSection === item.href
                  ? "text-gray-800 text-sm"
                  : "text-gray-500 text-xs"
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
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
