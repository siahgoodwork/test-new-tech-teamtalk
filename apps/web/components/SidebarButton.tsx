"use client";

import { Button } from "./Button";

export function SidebarButton({
  icon,
  children,
  onClick,
  isActive = false,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}) {
  const variants = {
    active: "hover:font-bold bg-p-y-500",
    normal: "",
  };
  return (
    <Button
      onClick={onClick}
      iconLeft={icon}
      rounded={"md"}
      color={"primaryYellow"}
      justify="start"
      extendClass={isActive ? variants.active : variants.normal}
    >
      {children}
    </Button>
  );
}
