import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Button = ({ children, variant = "primary", size = "medium", className, ...rest }: Props) => {
  const commonClasses = "rounded-lg shadow-lg shadow-black/25  justify-center items-center inline-flex w-full py-1 border-solid border-2";

  const variantClasses = {
    primary: "bg-primary border-primary-darker text-white",
    secondary: "bg-secondary border-secondary-darker text-white",
  };

  const sizes = {
    small: "text-sm ",
    medium: " text-xl ",
    large: "text-2xl",
  };

  return (
    <button className={`${commonClasses} ${variantClasses[variant]} ${sizes[size]} ${className}  font-radley`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
