"use client";

import Button from "@/components/UI/Button";
import { usePathname } from "next/navigation";

interface Props {
  ProductorName: string;
}

const ActionCardProductor = ({ ProductorName }: Props) => {
  const pathname = usePathname();

  return (
    <Button size="large" href={`${pathname}/${ProductorName}`}>
      Vedi Prodotti
    </Button>
  );
};

export default ActionCardProductor;
