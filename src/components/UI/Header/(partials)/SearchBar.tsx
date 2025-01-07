"use client";

import IconSearch from "@/components/icons/IconSearch";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useSearchQuery from "@/hooks/useSearchQuery";

const SearchBar: React.FC = () => {
  const { query, suggestions, handleChange, getHref } = useSearchQuery();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const selectedSuggestion = suggestions[selectedIndex];
      window.location.href = getHref(selectedSuggestion);
    }
  };

  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  useEffect(() => {
    if (selectedIndex >= 0 && suggestionsRef.current) {
      const selectedElement = suggestionsRef.current.children[selectedIndex] as HTMLElement;
      selectedElement.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <div className="w-full flex flex-col bg-white p-1 rounded-md h-14 mt-2 relative">
      <div className="flex items-center">
        <div className="bg-primary flex items-center justify-center aspect-square rounded-md p-2">
          <IconSearch color="white" size={32} />
        </div>
        <input type="text" placeholder="Search..." className="input input-bordered w-full px-4 h-full" value={query} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
      {suggestions.length > 0 && (
        <div ref={suggestionsRef} className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <Link className={`block p-2 cursor-pointer hover:bg-gray-200 ${index === selectedIndex ? "bg-gray-200" : ""}`} key={index} href={getHref(suggestion)}>
              {suggestion.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
