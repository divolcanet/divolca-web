"use client";

import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light" as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        { "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--success-border": "var(--primary-10)", "--border-radius": "calc(infinity * 1px)" } as React.CSSProperties
      }
      toastOptions={{ classNames: { toast: "cn-toast " } }}
      {...props}
    />
  );
};

export { Toaster };
