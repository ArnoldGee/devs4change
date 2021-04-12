import cn from "classnames";
import React from "react";
interface ParagraphProps {
  children: React.ReactNode;
  className: string;
}

function Paragraph({ children, className }: ParagraphProps): JSX.Element {
  return <p className={cn("text-lg leading-snug", className)}>{children}</p>;
}

export default Paragraph;
