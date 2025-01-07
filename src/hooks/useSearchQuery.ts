import { useState, useEffect, ChangeEvent } from "react";
import placeJSon from "@/data/places.json";
import productorsJson from "@/data/productors.json";
import productJson from "@/data/product.json";

interface Suggestion {
  type: "place" | "productor" | "product";
  id: string;
  name: string;
  place?: string | number;
  id_n?: string;
}

const mapPlaceToSuggestion = (place: any): Suggestion => ({
  type: "place",
  id: place.id.toString(),
  name: place.name,
  id_n: place.id_n,
});

const mapProductorToSuggestion = (productor: any): Suggestion => ({
  type: "productor",
  id: productor.id.toString(),
  name: productor.name,
  place: productor.place,
});

const mapProductToSuggestion = (product: any): Suggestion => ({
  type: "product",
  id: product.id.toString(),
  name: product.name,
});

const useSearchQuery = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredPlaces = placeJSon.filter((place) => place.name.toLowerCase().includes(query.toLowerCase())).map(mapPlaceToSuggestion);

      const filteredProductors = productorsJson.filter((productor) => productor.name.toLowerCase().includes(query.toLowerCase())).map(mapProductorToSuggestion);

      const filteredProducts = productJson.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())).map(mapProductToSuggestion);

      setSuggestions([...filteredPlaces, ...filteredProductors, ...filteredProducts]);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const getHref = (suggestion: Suggestion): string => {
    if (suggestion.type === "product") {
      return `/product/${suggestion.id}`;
    } else if (suggestion.type === "place") {
      return `/${suggestion.id_n}`;
    } else if (suggestion.type === "productor") {
      const placeref = placeJSon.find((place) => place.id === suggestion.place);
      return `/${placeref?.id_n}/${suggestion.name}`;
    }
    return "#";
  };

  return { query, suggestions, handleChange, getHref };
};

export default useSearchQuery;
