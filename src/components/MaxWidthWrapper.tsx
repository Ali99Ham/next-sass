import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}
export const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return <div className={cn("h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>;
};
