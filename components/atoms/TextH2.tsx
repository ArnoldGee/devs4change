import React, { ReactElement, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className: string;
}

export default function TextH2({ children, className }: Props): ReactElement {
  return <h2 className={cn("text-4xl", className)}>{children}</h2>;
}
