import React from "react";
import { cn } from "../lib/utils";

const Legend = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "  bg-white p-4 rounded-xl flex flex-col gap-4 w-120",
        className,
      )}
      {...props}
    >
      <h3 className=" font-bold">Legenda</h3>
      <div className="flex items-start gap-3">
        <div className=" flex-1">
          <div className=" w-full  h-3 bg-[linear-gradient(to_right,var(--color-blue-500),var(--color-green-500),var(--color-yellow-500),var(--color-red-500))] rounded-full"></div>
          <div className="flex w-full justify-between">
            <span>-50</span>
            <span>15</span>
            <span>50</span>
            <span>100</span>
            <span>300</span>
            <span>500</span>
          </div>
        </div>
        <span className=" text-lg font-bold">nT</span>
      </div>
    </div>
  );
};

export default Legend;
