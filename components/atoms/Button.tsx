import React, { ReactElement, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  style?: "primary" | "inverted";
}

export default function Button({ onClick, children, style = "primary" }: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-4 px-6 cursor-pointer transition",
        style === "primary" && "text-white bg-yellow hover:bg-yellow-lighter",
        style === "inverted" &&
          "text-brown border-2 border-transparent hover:border-brown font-bold"
      )}
    >
      {children}
    </button>
  );
}
