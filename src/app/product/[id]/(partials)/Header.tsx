import React from "react";

const Header = () => {
  return (
    <div className="h-96 px-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-0.5 bg-slate-800" />
      <div className="self-stretch px-9 justify-between items-center inline-flex">
        <div className="w-96 h-96 px-9 py-2 flex-col justify-end items-center gap-1.5 inline-flex">
          <div className="w-36 px-6 justify-center items-center gap-1.5 inline-flex">
            <div className="px-6 py-px justify-start items-center gap-1 flex">
              <div className="text-xl font-normal font-['Inter']">•</div>
              <div className="text-xl font-normal font-['Inter']">•</div>
              <div className="text-white text-xl font-normal font-['Inter']">•</div>
              <div className="text-xl font-normal font-['Inter']">•</div>
              <div className="text-xl font-normal font-['Inter']">•</div>
            </div>
          </div>
        </div>
        <div className="h-96 flex-col justify-between items-start inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-80 text-[#6b778a] text-xl font-normal font-['Radley']">Bottega di Camagna</div>
            <div className="w-6 h-6 pl-1 pr-1.5 pt-0.5 pb-px justify-center items-center flex overflow-hidden" />
          </div>
          <div className="self-stretch h-52 flex-col justify-center items-start gap-3.5 flex">
            <div className="h-12 relative">
              <div className="w-80 h-12 left-0 top-0 absolute text-slate-800 text-2xl font-normal font-['Radley']">Vino Grignolino - del monferrato casalese</div>
            </div>
            <div className="self-stretch h-32 p-2.5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-slate-800 text-xl font-normal font-['Markazi Text']">
                vino rosso leggero e fresco, con note di frutti rossi e spezie. Versatile e tradizionale, è perfetto con piatti piemontesi e aperitivi informali.
              </div>
            </div>
          </div>
          <div className="self-stretch h-36 px-4 border-l-2 border-[#083400] flex-col justify-start items-start gap-4 flex overflow-hidden">
            <div>
              <span className="text-[#353a40] text-xl font-normal font-['Markazi Text']">Annata:</span>
              <span className="text-[#6b778a] text-xl font-normal font-['Markazi Text']"> </span>
              <span className="text-slate-800 text-xl font-semibold font-['Markazi Text']">2022</span>
            </div>
            <div>
              <span className="text-[#353a40] text-xl font-normal font-['Markazi Text']">Denominazione:</span>
              <span className="text-[#6b778a] text-xl font-semibold font-['Markazi Text']"> </span>
              <span className="text-slate-800 text-xl font-semibold font-['Markazi Text']">Grignolino Doc</span>
            </div>
            <div>
              <span className="text-[#353a40] text-xl font-normal font-['Markazi Text']">Alcol:</span>
              <span className="text-[#6b778a] text-xl font-normal font-['Markazi Text']"> </span>
              <span className="text-slate-800 text-xl font-semibold font-['Markazi Text']">13,5 %</span>
            </div>
            <div>
              <span className="text-[#353a40] text-xl font-normal font-['Markazi Text']">Tipologia:</span>
              <span className="text-[#6b778a] text-xl font-normal font-['Markazi Text']"> </span>
              <span className="text-slate-800 text-xl font-semibold font-['Markazi Text']">Rosso</span>
            </div>
          </div>
          <div className="w-80 pt-2.5 justify-between items-end inline-flex overflow-hidden">
            <div className="w-32 h-14 flex-col justify-center items-center gap-1.5 inline-flex">
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 h-9 text-center">
                  <span className="text-slate-800 text-3xl font-normal font-['Radley']">39</span>
                  <span className="text-slate-800 text-base font-normal font-['Radley']">,99 €</span>
                </div>
              </div>
              <div className="w-28 h-5 rounded justify-start items-center inline-flex overflow-hidden">
                <div className="self-stretch px-2 bg-[#9b7643] rounded-tl rounded-bl border-l border-t border-b border-[#8f6e41] justify-center items-center gap-3 flex overflow-hidden">
                  <div className="w-4 h-4 px-1 justify-center items-center flex" />
                </div>
                <div className="grow shrink basis-0 self-stretch px-2 py-1 bg-[#cfc5c0] border-t border-b border-[#c4bab6] justify-center items-center gap-3 flex overflow-hidden">
                  <div className="w-7 h-2 text-center text-black text-sm font-normal font-['Markazi Text']">1</div>
                </div>
                <div className="w-8 self-stretch bg-[#9b7643] rounded-tr rounded-br border-r border-t border-b border-[#8f6e41] justify-center items-center gap-3 flex overflow-hidden">
                  <div className="w-4 h-4 p-1 justify-center items-center flex" />
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-[#083400] rounded-md justify-center items-center gap-3 flex">
              <div className="text-center text-[#fcfcfc] text-base font-normal font-['Radley']">Aggiungi al carrello</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0.5 bg-slate-800" />
    </div>
  );
};

export default Header;
