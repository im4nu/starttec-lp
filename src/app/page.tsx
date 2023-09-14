import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#060B27] relative w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-start w-[70%]">
        <Navbar />

        <HeroSection />

        <Image
          src={"/icons/purple-circle.svg"}
          alt="Círculo roxo"
          height={226}
          width={274}
          className="absolute left-0 top-[233px] z-10 w-[730px] h-[730px]"
        />
        <Image
          src={"/icons/blue-circle.svg"}
          alt="Círculo azul"
          height={156}
          width={190}
          className="absolute right-0 top-[630px] z-10 w-[730px] h-[730px]"
        />

        <AboutSection />
      </div>
    </main>
  );
}
