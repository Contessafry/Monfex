import { utlsSplitPrice } from "@/utility/splitPrice";

interface Props {
  value: number | string;
}

const Price = ({ value }: Props) => {
  const { integerPart, decimalPart, currency, annotation } = utlsSplitPrice(value);

  return (
    <div className="text-center">
      <div>
        <span className="text-slate-800 text-3xl font-normal font-radley">{integerPart}</span>
        <span className="text-slate-800 text-base font-normal font-radley">,{decimalPart}</span>
        {currency && <span className="text-slate-800 text-lg font-normal font-radley ml-1">{currency}</span>}
      </div>
      {annotation && <div className="text-slate-600 text-sm font-light font-radley mt-1">{annotation}</div>}
    </div>
  );
};

export default Price;
