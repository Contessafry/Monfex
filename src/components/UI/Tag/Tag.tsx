import IconCheese from "@/components/icons/IconCheese";
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

    default:
      return <></>;
  }
};

export default Tag;
