"use client";
import IconArrow from "@/components/icons/IconArrow";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  text: string;
  textSize?: string;
  showMobile?: boolean;
}

const GoBackAction = ({ text, textSize = "text-2xl", showMobile = false }: Props) => {
  const router = useRouter();

  return (
    <div className={`w-full h-8 justify-start items-center gap-2.5 whitespace-nowrap  cursor-pointer ${showMobile ? "flex" : "hidden"} md:flex`} onClick={() => router.back()}>
      <IconArrow className={textSize} />
      <span className={`w-80 text-black  ${textSize}  font-normal font-radley`}>{text}</span>
    </div>
  );
};

export default GoBackAction;
