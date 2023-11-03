import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import LinkDemo from "@/components/ui/Link";
import { productsData } from "@/utils/products";
import Image from "next/image";

export default function Products() {
  return (
    <main className="flex relative min-h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-start w-4/5 md:w-[70%] text-white mt-8">
        <div className="flex flex-col items-start gap-3 justify-center w-full">
          <LinkDemo variant="outlined" link={"/"}>
            <Image
              alt="Voltar"
              src={"icons/arrow2.svg"}
              className="rotate-90 flex"
              height={24}
              width={24}
            />
          </LinkDemo>

          <h2 className="title-gradient text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold ">
            Confira nossos produtos de perto
          </h2>
          <p className="text-gray-300 text-xs md:text-lg lg:text-xl">
            {`Clique em "Visitar" para ver cada projeto em funcionamento`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap md:w-4/5 items-center justify-center gap-12 mt-6 w-full">
          {productsData.map((item, index) => (
            <ProductCard
              description={item.description}
              image={item.image}
              launchDate={item.launchDate}
              link={item.link}
              title={item.title}
              key={item.id}
              identifier={item.id}
              index={index}
            />
          ))}
        </div>
        <Footer onLadinginPage={false} />
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
    </main>
  );
}
