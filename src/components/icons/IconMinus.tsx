import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  color?: string;
  size?: number;
}

const IconMinus = ({ size = 18, color = "#CFC5C1", ...rest }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M4.67468 9.79832V8.40454H13.0373V9.79832H4.67468Z" fill={color} />
    </svg>
  );
};

export default IconMinus;
