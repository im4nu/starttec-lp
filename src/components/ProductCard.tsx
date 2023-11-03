import Image from "next/image";
import Motion from "./motion/Motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  launchDate: string;
  link: string;
  identifier: number;
  index?: number;
}

export default function ProductCard({
  description,
  image,
  launchDate,
  link,
  title,
  identifier,
  index,
}: ProductCardProps) {
  return (
    <div className="flex flex-col relative px-6 py-4 lg:text-start gap-4 lg:gap-0 h-fit text-center w-4/5 lg:w-[300px] lg:h-[400px] border border-gray-600 rounded-xl bg-neutral-600 justify-between items-center lg:items-start">
      <Motion direction="left" identifier={identifier}>
        <Image
          alt="Ilustração do produto St Doctor"
          src={image}
          width={342}
          height={180}
          className={`z-20 h-[180px] object-contain rounded-xl ${
            index === 1 ? "bg-transparent" : "bg-white"
          }`}
        />
      </Motion>

      <h3 className="z-20 text-lg md:text-xl">{title}</h3>
      <p className="text-xs z-20 text-gray-300 capitalize">{description}</p>

      <div className="border border-gray-600 h-[1px] w-full z-20" />

      <div className="flex flex-col md:flex-row gap-2 lg:gap-6 md:gap-0 justify-between items-center z-20">
        <p className="text-xs text-gray-300">Lançado em: {launchDate}</p>
        <a
          target="_blank"
          href={link}
          className="flex flex-row items-center gap-2"
        >
          <p className="text-sm">Visitar</p>{" "}
          <Image
            alt="Seta para direita"
            src={"/icons/right-arrow.svg"}
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
}
