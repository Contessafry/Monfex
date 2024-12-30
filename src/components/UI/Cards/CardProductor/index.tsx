import { ModelProductor } from "@/models/productor";
import ActionCardProductor from "./(partials)/Action";
import Image from "next/image";
import Tag from "../../Tag/Tag";
import { utlsTruncateText } from "@/utility/truncateText";

interface Props {
  productor: ModelProductor;
}

const CardProductor = ({ productor }: Props) => {
  const { name, description, image, tags } = productor;

  return (
    <div className="w-full bg-white rounded-xl h-52  md:h-72 shadow-lg shadow-black/25 border-2 border-gray-lighter justify-between items-center flex overflow-hidden">
      <div className="bg-slate-300 w-full h-full max-w-44 md:max-w-full flex grow overflow-hidden">
        <Image width={1000} height={2000} className="w-full h-full max-w-44 md:max-w-full rounded-tl-xl rounded-bl-xl object-cover mix-blend-darken" src={`/productors/${image}`} alt={image} />
      </div>
      <div className="p-4 bg-white h-full flex-col justify-between items-start flex ">
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="w-full h-10 text-black text-xl md:text-4xl font-bold whitespace-nowrap">{name}</div>
          <div className="flex gap-5">
            {tags.map((tag) => (
              <Tag key={tag} name={tag} className="w-4 md:w-full" />
            ))}
          </div>
        </div>
        <div className="hidden md:block text-blueT text-xl font-normal font-radley my-4 ">
          <span>{utlsTruncateText(description, 200)}</span>
        </div>
        <div className="block md:hidden text-blueT font-normal text-xs font-radley  my-1">
          <span>{utlsTruncateText(description, 45)}</span>
        </div>
        <ActionCardProductor ProductorName={name} />
      </div>
    </div>
  );
};

export default CardProductor;
