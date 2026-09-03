import type React from "react";
import { cn } from "../../lib/utils";

const Tag = ({ className, children, ...props }: React.ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("inline-block px-4 py-1.5 text-xs bg-primary-25/10 rounded-full border border-primary-10/20", className)} {...props}>
      {children}
    </span>
  );
};

export default Tag;
