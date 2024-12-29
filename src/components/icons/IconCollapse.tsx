import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  width?: number;
  height?: number;
  color?: string;
}

const IconCollapse = ({ width = 27, height = 26, color = "#083400", ...rest }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-[25.7px] h-[25.7px] relative"
    preserveAspectRatio="none"
    {...rest}
  >
    <path d="M20.2648 16.2688L13.8388 9.84277L7.41284 16.2688" stroke={color} strokeWidth="2.5704" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default IconCollapse;
