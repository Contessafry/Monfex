import IconCart from "@/components/icons/IconCart";
import IconMonfexLogo from "@/components/icons/IconMonfexLogo";
import IconSearch from "@/components/icons/IconSearch";
import IconUser from "@/components/icons/IconUser";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full justify-between items-center inline-flex py-2 px-4 fixed top-0 z-50">
      <Link href={"/"}>
        <IconMonfexLogo />
      </Link>

      <div className="items-center flex gap-10">
        <IconSearch />
        <IconUser />
        <IconCart />
      </div>
    </div>
  );
};

export default NavBar;
