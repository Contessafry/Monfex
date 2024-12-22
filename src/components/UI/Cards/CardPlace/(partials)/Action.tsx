"use client";

import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";

const ActionCardPlace = ({ placeIdN }: { placeIdN: string }) => {
  const router = useRouter();

  return (
    <Button variant="secondary" size="large" onClick={() => router.push(`/${placeIdN}`)}>
      Vedi Produttori
    </Button>
  );
};

export default ActionCardPlace;
