import IconCheese from "@/components/icons/IconCheese";
import IconCookies from "@/components/icons/IconCookies";
import IconJar from "@/components/icons/IconJar";
import IconSalami from "@/components/icons/IconSalami";
import IconWine from "@/components/icons/IconWine";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  name: string;
}

const Tag = ({ name, ...rest }: Props) => {
  switch (name) {
    case "honey":
      return <IconJar {...rest} />;
    case "wine":
      return <IconWine {...rest} />;
    case "meat":
      return <IconSalami {...rest} />;
    case "cheese":
      return <IconCheese {...rest} />;
    case "cookies":
      return <IconCookies {...rest} />;
    default:
      return <></>;
  }
};

export default Tag;
