import { ModelProductor } from "@/models/productor";
import Button from "../../Button";
import ActionCardProductor from "./(partials)/Action";

interface Props {
  productor: ModelProductor;
}

const CardProductor = ({ productor }: Props) => {
  return (
    <div className="w-full h-96 bg-white rounded-xl shadow-[0px_9.019608497619629px_9.019608497619629px_0px_rgba(0,0,0,0.25)] border-2 border-[#b3b3b3] justify-between items-center inline-flex overflow-hidden">
      <img className="w-96 h-96 rounded-tl-xl rounded-bl-xl" src="https://via.placeholder.com/410x386" />
      <div className="grow shrink basis-0 h-96 p-6 bg-white flex-col justify-between items-start inline-flex overflow-hidden">
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="w-80 h-10 text-black text-4xl font-bold font-['Markazi Text']">{productor.name}</div>
          <div className="w-80 h-8 justify-start items-center gap-6 inline-flex overflow-hidden">
            <div className="w-7 h-7 relative  overflow-hidden" />
            <div className="justify-center items-center flex overflow-hidden" />
            <div className="w-7 h-7 relative  overflow-hidden" />
          </div>
        </div>
        <div className="self-stretch text-black text-2xl font-normal font-['Radley']">
          <span>{productor.description}</span>
        </div>
        <ActionCardProductor ProductorName={productor.name} />
      </div>
    </div>
  );
};

export default CardProductor;
