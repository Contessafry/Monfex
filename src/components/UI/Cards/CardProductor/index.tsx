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
    <div className="w-full  max-h-96 bg-white rounded-xl shadow-lg shadow-black/25 border-2 border-gray-lighter justify-between items-center flex overflow-hidden">
      <div className="bg-slate-300">
        <Image width={500} height={1000} className="h-full  rounded-tl-xl rounded-bl-xl object-cover object-center mix-blend-darken " src={`/productors/${image}`} alt={image} />
      </div>
      <div className="grow shrink basis-0 h-96 p-6 bg-white flex-col justify-between items-start inline-flex overflow-hidden">
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="w-full h-10 text-black text-4xl font-bold">{name}</div>
          <div className="flex gap-5">
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
        <div className="self-stretch text-black text-2xl font-normal font-radley">
          <span>{utlsTruncateText(description, 200)}</span>
        </div>
        <ActionCardProductor ProductorName={name} />
      </div>
    </div>
  );
};

export default CardProductor;
