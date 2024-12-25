"use client";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={`absolute -right-4 w-96 h-[calc(100vh-60px)] flex-col justify-between items-center inline-flex`}>
      <div className="w-full flex justify-end items-center px-4">
        <div className="triangle bg-neutral-lighter w-11 h-6" />
      </div>
      <div className="h-full px-4 bg-neutral-lighter flex-col justify-between items-center flex">
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
          <div className="w-36 h-14 text-black text-2xl font-bold font-['Markazi Text']">Il tuo carrello (2)</div>
        </div>
        <div className="py-4 flex-col justify-start items-start gap-6 flex">
          <div className="px-3.5 bg-[#cfc5c0] rounded border border-[#bbb0ab] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-black text-base font-normal font-['Markazi Text'] leading-relaxed tracking-wide">Items (2)</div>
              <div className="text-right">
                <span className="text-slate-800 text-xl font-normal font-['Radley']">125</span>
                <span className="text-slate-800 text-sm font-normal font-['Radley']">,99 €</span>
              </div>
            </div>
            <div className="w-80 justify-between items-start inline-flex">
              <div className="text-black text-base font-normal font-['Markazi Text'] leading-relaxed tracking-wide">Spedizione</div>
              <div className="w-11 self-stretch text-right">
                <span className="text-slate-800 text-xl font-normal font-['Radley']">4</span>
                <span className="text-slate-800 text-sm font-normal font-['Radley']">,99 €</span>
              </div>
            </div>
            <div className="w-80 h-px border border-[#ede6e3]"></div>
            <div className="w-80 justify-between items-center inline-flex">
              <div className="text-slate-800 text-xl font-bold font-['Markazi Text'] leading-loose tracking-wide">Totale</div>
              <div className="text-right">
                <span className="text-slate-800 text-xl font-normal font-['Radley']">39</span>
                <span className="text-slate-800 text-sm font-normal font-['Radley']">,99 €</span>
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-2 bg-[#083400] rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-[#fcfcfc] text-2xl font-normal font-['Radley']">Vai al Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
