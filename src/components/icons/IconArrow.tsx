import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  size?: number;
}
const IconArrow = ({ size = 34, color = "#1D1B20", ...rest }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M11.0854 18.4167L19.0188 26.3501L17 28.3334L5.66669 17.0001L17 5.66675L19.0188 7.65008L11.0854 15.5834H28.3334V18.4167H11.0854Z" fill={color} />
    </svg>
  );
};

export default IconArrow;
