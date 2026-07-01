import type React from "react";
import { cn } from "../../lib/utils";

const Container = ({
  id,
  children,
  classname,
}: {
  id?: string;
  classname?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={cn(" w-full", classname)}>
      <div className={"max-w-7xl mx-auto px-5 py-12"}>{children}</div>
    </section>
  );
};

export default Container;
