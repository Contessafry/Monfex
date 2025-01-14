"use client";

import { useState } from "react";
import Drawer from "../../../Drawer";
import IconSearch from "@/components/icons/IconSearch";
import Link from "next/link";
import useSearchQuery from "@/hooks/useSearchQuery";

const ActionSearch = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { query, suggestions, handleChange, getHref } = useSearchQuery();

  return (
    <div className="relative">
      <IconSearch className="cursor-pointer w-10 md:w-12" color={isOpenSearch ? "#4CAF4F" : "#1E293B"} onClick={() => setIsOpenSearch(true)} />
      <Drawer isOpen={isOpenSearch} onClose={() => setIsOpenSearch(false)} className="-right-[125px] md:-right-5" arrowClassName="px-[120px] md:px-5">
        <div className="flex flex-col gap-2 h-full w-full py-6">
          <div className="bg-white rounded-md px-4 py-2 mb-1 w-full">
            <input type="text" placeholder="Search..." className="input input-bordered w-full" value={query} onChange={handleChange} />
          </div>
          <div className="self-stretch  border-solid border-slate-800 border-[0.5px]" />
          {suggestions.length > 0 && (
            <div className="flex-grow w-full overflow-y-auto  rounded-md hide-scrollbar">
              {suggestions.map((suggestion, index) => (
                <Link key={index} href={getHref(suggestion)} onClick={() => setIsOpenSearch(false)}>
                  <div className="block p-2 cursor-pointer hover:bg-gray-200">{suggestion.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default ActionSearch;
