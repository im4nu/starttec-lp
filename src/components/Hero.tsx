"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { paddingTop: 100, opacity: 0 },
    visible: {
      paddingTop: 0,
      opacity: 1,
    },
  };
  return (
    <section id="home" className="flex flex-col w-[70%] max-w-7xl z-20">
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center text-center mt-[180px] gap-[30px]">
          <motion.li variants={item} key={0}>
            <h1 className="title-gradient text-6xl font-bold py-6">
              Seja bem vindo(a) a StartTec Soluções
            </h1>
            <p className="text-gray-300">
              Transformamos ideias em software de excelência
            </p>
          </motion.li>

          <motion.li variants={item} key={1}>
            <div className="flex flex-row items-center justify-center gap-12">
              <Button size="medium" variant="contained">
                Saber Mais
              </Button>
              <Button size="medium" variant="outlined">
                Visitar Projetos
              </Button>
            </div>
          </motion.li>

          <motion.li variants={item} key={2}>
            <Image
              alt="Ilustração de uma Dashboard"
              src={"/icons/dashboard.svg"}
              width={800}
              height={500}
            />
          </motion.li>
        </div>
      </motion.ul>
    </section>
  );
}
