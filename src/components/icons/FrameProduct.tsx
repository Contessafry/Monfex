import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const FrameProduct = ({ width = 252, height = 44, color = "white", ...rest }: Props) => (
  <svg width={width} height={height} viewBox="0 0 252 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M129.806 18.882H193.949L251.436 0.795898V43.0538H0.802734V0.795898L61.9754 18.882H129.806Z" fill={color} />
  </svg>
);

export default FrameProduct;
