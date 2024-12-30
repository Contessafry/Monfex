import IconSearch from "@/components/icons/IconSearch";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex bg-white p-1 rounded-md h-14 mt-2">
      <div className=" bg-primary flex items-center justify-center aspect-square  rounded-md py-4">
        <IconSearch color="white" size={34} />
      </div>
      <input type="text" placeholder="Search..." className="input input-bordered w-full px-4 h-full" />
    </div>
  );
};

export default SearchBar;
