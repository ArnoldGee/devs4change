import React, { Children, ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TextH2({ children }: Props): ReactElement {
  return <h2 className="text-4xl">{children}</h2>;
}
