import type React from "react";
import { cn } from "../../lib/utils";

const Container = ({
  id,
  children,
  className,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={cn(" w-full", className)}>
      <div className={"max-w-7xl mx-auto px-5 py-14"}>{children}</div>
    </section>
  );
};

export default Container;
