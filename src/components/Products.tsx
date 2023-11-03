import { productsData } from "@/utils/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="flex flex-col items-center justify-center mt-20 w-full"
    >
      <div className="flex flex-row items-center justify-between gap-6 md:gap-24 w-full">
        <h2 className="title-gradient text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold lg:py-2">
          Confira alguns dos nossos produtos
        </h2>
        <a
          href="/products"
          className="rounded-3xl bg-main py-4 text-sm hover:scale-105 hover:cursor-pointer ease-linear duration-300 w-[180px] text-center"
        >
          Ver todos
        </a>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-6 w-full">
        {productsData.map((item, index) => {
          if (item.id <= 2)
            return (
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
            );
        })}
      </div>
    </section>
  );
}
