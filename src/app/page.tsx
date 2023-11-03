import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import FeedbackSection from "@/components/Feedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#060B27] relative w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-start w-4/5 md:w-[70%] text-white">
        <Navbar />

        <HeroSection />

        <div className="flex w-full items-center justify-center mt-20">
          <Image
            alt="seta para baixo"
            src={"/icons/arrow2.svg"}
            height={32}
            width={32}
            className="animate-v-bounce"
          />
        </div>

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
          height={226}
          width={274}
          className="absolute right-0 top-[630px] z-10 w-[730px] h-[730px]"
        />

        <AboutSection />

        <FeedbackSection />

        <Banner />

        <ProductsSection />

        <Footer onLadinginPage />

        <Image
          src={"/icons/purple-circle.svg"}
          alt="Círculo roxo"
          height={400}
          width={400}
          className="absolute left-0 bottom-0"
        />

        <Image
          src={"/icons/blue-circle.svg"}
          alt="Círculo azul"
          height={400}
          width={400}
          className="absolute right-0 bottom-0"
        />

        <a
          href={`http://wa.me/558198101171?text=${encodeURIComponent(
            `Olá! Venho do site da StartTec e gostaria de fazer um orçamento.`
          )}`}
          className="fixed bottom-20 right-4 rounded-full p-4 bg-green-700 bg-blur z-30 animate-pulse"
        >
          <Image
            alt="Whatsapp"
            src={"icons/whats-white.svg"}
            width={24}
            height={24}
          />
        </a>

        <a
          href="#home"
          className="fixed bottom-4 right-4 flex bg-black/70 bg-blur z-30 border border-gray-600 p-4 rounded-full"
        >
          <Image
            alt="Voltar para o topo"
            src={"icons/right-arrow.svg"}
            className="-rotate-90"
            width={24}
            height={24}
          />
        </a>
      </div>
    </main>
  );
}
