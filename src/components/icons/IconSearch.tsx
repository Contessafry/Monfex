import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  size?: number;
  color?: string;
}

const IconSearch = ({ size = 55, color = "#1E293B" }: Props) => (
  <svg width={size} height={size} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.7707 9.16675C29.9978 9.16675 36.6665 15.8355 36.6665 24.0626C36.6665 27.7751 35.3145 31.1667 33.0686 33.7563L46.0165 46.7042L44.3895 48.3313L31.4415 35.3834C28.852 37.6063 25.4603 38.9584 21.7707 38.9584C13.5436 38.9584 6.87488 32.2897 6.87488 24.0626C6.87488 15.8355 13.5436 9.16675 21.7707 9.16675ZM21.7707 11.4584C14.804 11.4584 9.16654 17.0959 9.16654 24.0626C9.16654 31.0292 14.804 36.6667 21.7707 36.6667C28.7374 36.6667 34.3749 31.0292 34.3749 24.0626C34.3749 17.0959 28.7374 11.4584 21.7707 11.4584Z"
      fill={color}
    />
  </svg>
);

export default IconSearch;
