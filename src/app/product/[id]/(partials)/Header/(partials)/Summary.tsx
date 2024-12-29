import { ModelProduct } from "@/models/product";

interface Props {
  summary: ModelProduct["summary"];
}

const Summary = ({ summary }: Props) => {
  const SummaryEntries = summary ? Object.entries(summary) : [];

  return (
    <ul className=" list-disc list-inside text-[#353a40] text-xl   px-4 border-l-2 border-primary flex-col justify-start items-start gap-4 flex">
      {SummaryEntries.map(([key, value]) => (
        <li key={key}>
          <span className=" font-normal font-['Markazi Text']">{key} </span>
          <span className="text-slate-800 text-xl font-semibold font-['Markazi Text']">{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Summary;
