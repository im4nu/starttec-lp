import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  launchDate: string;
  link: string;
}

export default function ProductCard({
  description,
  image,
  launchDate,
  link,
  title,
}: ProductCardProps) {
  return (
    <div className="flex flex-col relative px-6 py-4 w-[300px] h-[400px] border border-gray-600 rounded-xl bg-neutral-600 justify-between">
      <Image
        alt="Ilustração do produto St Doctor"
        src={image}
        width={342}
        height={230}
        className="z-20"
      />

      <h3 className="z-20">{title}</h3>
      <p className="text-xs z-20 text-gray-300">{description}</p>

      <div className="border border-gray-600 h-[1px] w-full z-20" />

      <div className="flex flex-row justify-between items-center z-20">
        <p className="text-xs text-gray-300">Lançado em: {launchDate}</p>
        <a href={link} className="flex flex-row items-center gap-2">
          <p className="text-sm">Visitar</p>{" "}
          <Image
            alt="Seta para direita"
            src={"/icons/right-arrow.svg"}
            width={24}
            height={24}
          />
        </a>
      </div>

      <Image
        src={"/icons/blue-circle.svg"}
        alt="Ciruculo azul"
        width={100}
        height={100}
        className="absolute right-0 top-0 object-cover z-10"
      />

      <Image
        src={"/icons/purple-circle.svg"}
        alt="Ciruculo roxo"
        width={100}
        height={100}
        className="absolute left-0 bottom-0 object-cover"
      />
    </div>
  );
}