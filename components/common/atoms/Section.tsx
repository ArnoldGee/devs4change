import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props): ReactElement {
  return <section className="px-5">{children}</section>;
}
