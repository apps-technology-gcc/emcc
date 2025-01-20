import { cn } from "../../lib/utils";
import React from "react";
interface SectionProps {
  children: React.ReactNode;
  fluid?: boolean;
  bgColor: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  fluid,
  bgColor,
  className,
}) => {
  return (
    <section className={cn("py-20", "bg-" + bgColor, className)}>
      {fluid ? children : <div className="container">{children}</div>}
    </section>
  );
};

export default Section;
