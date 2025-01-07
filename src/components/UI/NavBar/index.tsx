import IconMonfexLogo from "@/components/icons/IconMonfexLogo";
import IconSearch from "@/components/icons/IconSearch";
import IconUser from "@/components/icons/IconUser";
import Link from "next/link";
import React from "react";
import ActionCart from "./(partials)/Cart/ActionCart";
import ActionSearch from "./(partials)/search/ActionSerch";

const NavBar = () => {
  return (
    <div className="w-full justify-between items-center inline-flex py-2 px-4 fixed top-0 z-50 bg-white/10 backdrop-blur-sm  shadow-md">
      <Link href={"/"}>
        <div className="hidden lg:block">
          <IconMonfexLogo />
        </div>
        <div className="block lg:hidden">
          <img src="/monfex-mobile.png" className="w-40" />
        </div>
      </Link>

      <div className="items-center flex gap-6 md:gap-10">
        <ActionSearch />
        <IconUser className=" w-7 md:w-9" />
        <ActionCart />
      </div>
    </div>
  );
};

export default NavBar;
