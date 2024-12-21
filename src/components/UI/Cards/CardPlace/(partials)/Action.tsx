"use client";

import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";

const CardPlaceAction = ({ placeName }: { placeName: string }) => {
  const router = useRouter();
  const firstWord = placeName.split(" ")[0];
  return (
    <Button variant="secondary" size="large" onClick={() => router.push(`/${firstWord}`)}>
      Vedi Produttori
    </Button>
  );
};

export default CardPlaceAction;
