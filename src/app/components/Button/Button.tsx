const buttonSizeVariant = {
  lg: "w-full h-[48px] py-[14px] rounded-[6px] text-lg font-bold leading-[26px] flex items-center justify-center",
  md: "w-[144px] h-[48px] py-[8px] rounded-[6px] text-lg font-bold leading-[26px] flex items-center justify-center",
  sm: "w-[108px] h-[38px] py-[10px] rounded-[6px] text-md font-bold leading-[24px] flex items-center justify-center",
};

const buttonColorVariant = {
  dark: "bg-primary text-white",
  bright: "bg-white text-primary border-solid border border-primary",
};
interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size: "lg" | "md" | "sm";
  color: "dark" | "bright";
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  type,
  size,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${disabled ? "bg-gray-600 text-white" : `${buttonColorVariant[color]}`} ${buttonSizeVariant[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
