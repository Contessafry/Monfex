import { utlsSplitPrice } from "@/utility/splitPrice";

interface Props {
  value: number | string;
  size?: "s" | "md" | "lg";
}

const Price = ({ value, size = "md" }: Props) => {
  const { integerPart, decimalPart, currency, annotation } = utlsSplitPrice(value);
  const mapSize = {
    s: "text-lg",
    md: "text-3xl",
    lg: "text-5xl",
  };

  return (
    <div className="text-center">
      <div>
        <span className={`text-slate-800 ${mapSize[size]} font-normal font-radley`}>{integerPart}</span>
        <span className="text-slate-800 text-base font-normal font-radley">,{decimalPart}</span>
        {currency && <span className="text-slate-800 text-lg font-normal font-radley ml-1">{currency}</span>}
      </div>
      {annotation && <div className="text-slate-600 text-sm font-light font-radley  ">{annotation}</div>}
    </div>
  );
};

export default Price;
