"use client";

import { Button } from "./Button";

export function SidebarButton({
  icon,
  children,
  onClick,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      onClick={onClick}
      iconLeft={icon}
      rounded={"md"}
      color={"primaryYellow"}
      extendClass="hover:font-bold"
      justify="start"
    >
      {children}
    </Button>
  );
}
