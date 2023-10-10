import Image from "next/image";

interface FeedbackCardProps {
  name: string;
  image: string;
  company: string;
  feedback: string;
  currentFeedback: number;
  index: number;
}

export default function FeedbackCard({
  company,
  feedback,
  image,
  name,
  currentFeedback,
  index,
}: FeedbackCardProps) {
  return (
    <div
      className={`flex flex-col w-[392px] items-center justify-center mt-20 ease-linear duration-300 ${
        currentFeedback === index ? "scale-110 mx-6" : ""
      }`}
    >
      <div className="flex flex-col rounded-xl bg-neutral-600 border border-gray-600 p-6 w-4/5 z-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <Image
              alt="perfil do usuário"
              src={image}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div className="flex flex-col">
              <h3>{name}</h3>
              <p className="text-sm text-gray-300">{company}</p>
            </div>
          </div>
          <Image alt="Aspas" src={"/icons/quotes.svg"} width={60} height={40} />
        </div>

        <p className="text-xs mt-4 text-gray-300">{feedback}</p>
      </div>

      <Image
        className={`-mt-24 ${currentFeedback === index ? "animate-pulse" : ""}`}
        alt="Background"
        src={"/icons/feedbackCardBg.svg"}
        width={392}
        height={110}
      />
    </div>
  );
}
