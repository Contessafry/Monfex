import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  color?: string;
  size?: number;
}

const IconPlus = ({ size = 18, color = "#CFC5C1", ...rest }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M8.59112 9.79874H4.40979V8.40497H8.59112V4.22363H9.9849V8.40497H14.1662V9.79874H9.9849V13.9801H8.59112V9.79874Z" fill={color} />
    </svg>
  );
};

export default IconPlus;
