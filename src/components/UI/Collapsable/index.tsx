const Collapsable = () => {
  return (
    <div className="h-40 p-4 bg-[#cfc5c0] rounded-lg border border-[#bbb0ab] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-[#083400] text-2xl font-bold font-['Markazi Text']">ABBINAMENTI</div>
        <div className="w-6 h-6 px-1.5 justify-center items-center flex overflow-hidden" />
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="grow shrink basis-0 text-slate-800 text-xl font-normal font-['Markazi Text']">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
          vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.
        </div>
      </div>
    </div>
  );
};

export default Collapsable;
