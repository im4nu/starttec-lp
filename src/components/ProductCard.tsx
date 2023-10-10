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
    <div className="flex flex-col px-6 py-4 w-[300px] h-[400px] border border-gray-600 rounded-xl bg-neutral-600 justify-between">
      <Image
        alt="Ilustração do produto St Doctor"
        src={image}
        width={342}
        height={230}
      />
      <h3>{title}</h3>
      <p className="text-xs">{description}</p>

      <div className="border border-gray-600 h-[1px] w-full" />

      <div className="flex flex-row justify-between items-center">
        <p className="text-xs">Lançado em: {launchDate}</p>
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
    </div>
  );
}
