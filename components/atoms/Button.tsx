import React, { ReactElement, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  style?: "primary" | "inverted";
  size?: "l" | "m";
}

export default function Button({
  onClick,
  children,
  style = "primary",
  size = "l",
}: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer transition",
        style === "primary" && "text-white bg-yellow hover:bg-yellow-lighter",
        style === "inverted" &&
          "text-brown border-2 border-transparent hover:border-brown font-bold",
        size === "l" && "py-4 px-6",
        size === "m" && "py-3 px-4"
      )}
    >
      {children}
    </button>
  );
}
