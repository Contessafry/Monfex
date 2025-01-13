"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  arrowClassName?: string;
  title?: string;
}

const Drawer = ({ isOpen, onClose, children, className, title, arrowClassName = "px-3" }: PropsWithChildren<Props>) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const initialPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      onClose();
    }
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={`absolute z-30 ${className} w-screen md:w-96 h-[calc(100vh-60px)] flex-col justify-between items-center inline-flex`}>
        <div className={`w-full flex justify-end items-center ${arrowClassName}`}>
          <div className="triangle bg-neutral-lighter w-12 h-6" />
        </div>
        <div ref={drawerRef} className="h-full px-4 bg-neutral-lighter flex-col items-center flex w-full md:w-auto min-w-[360px] rounded-sm">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">{title && <div className="w-36 h-14 text-black text-2xl font-bold">{title}</div>}</div>
          {children}
        </div>
      </div>
      <div className="fixed h-screen inset-0 bg-black opacity-20" onClick={onClose}></div>
    </>
  );
};

export default Drawer;
