import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", size = "medium", className, href, onClick, ...rest }: PropsWithChildren<Props>) => {
  const commonClasses = "rounded-lg shadow-lg shadow-black/25  justify-center items-center inline-flex w-full py-1 border-solid border-2";

  const variantClasses = {
    primary: "bg-primary border-primary-darker text-white",
    secondary: "bg-secondary border-secondary-darker text-white",
  };

  const sizes = {
    small: "text-sm ",
    medium: " text-xl ",
    large: "text-lg md:text-2xl",
  };

  if (href)
    return (
      <Link href={href} className={`${commonClasses} ${variantClasses[variant]} ${sizes[size]} ${className}  font-radley`} onClick={onClick} {...rest}>
        {children}
      </Link>
    );

  return (
    <button className={`${commonClasses} ${variantClasses[variant]} ${sizes[size]} ${className}  font-radley`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
