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

        <Footer />

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
          href="#home"
          className="fixed bottom-4 right-4 flex bg-black/70 bg-blur z-30 border border-gray-600 p-4 rounded-full"
        >
          <Image
            alt="Voltar para o topo"
            src={"icons/right-arrow.svg"}
            className="-rotate-90"
            width={18}
            height={18}
          />
        </a>
      </div>
    </main>
  );
}
