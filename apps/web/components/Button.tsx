"use client";
export function Button({
  children,
  onClick,
  iconLeft,
  iconRight,
  color = "default",
  extendClass,
  className,
  rounded = "default",
  justify = "default",
  fullWidth = true,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  extendClass?: string;
  className?: string;
  fullWidth?: boolean;
  color?: "primaryYellow" | "primaryGreen" | "default";
  rounded?: "full" | "sm" | "md" | "lg" | "default";
  justify?: "start" | "end" | "center" | "default";
}) {
  const colorVariants = {
    default: "bg-slate-100 hover:bg-slate-500 text-slate-900",
    primaryYellow: "bg-p-y-100 hover:bg-p-y-500 text-p-y-900",
    primaryGreen: "bg-p-g-500 hover:bg-p-g-900 text-white",
  };

  const roundedVariants = {
    default: "rounded-full",
    md: "rounded-md",
  };

  const justifyVariants = {
    default: "justify-center",
    start: "justify-start",
  };

  const isFullWidth = {
    true: "w-full",
    false: "",
  };

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center p-3 ${justifyVariants[justify]} ${
        colorVariants[color]
      } ${isFullWidth[`${fullWidth}`]} ${roundedVariants[rounded]}${
        extendClass ? ` ${extendClass}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
