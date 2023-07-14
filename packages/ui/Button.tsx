"use client";

import * as React from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={onClick}>{children}</button>;
};
