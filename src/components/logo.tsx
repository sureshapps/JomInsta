import React from "react";
import { cn } from "@/lib/utils";
import { Fira_Sans as LogoFont } from "next/font/google";

const logoFont = LogoFont({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function LogoText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-xl font-normal select-none",
        logoFont.className,
        className
      )}
      {...props}
    >
      JOMIG
    </div>
  );
}

export function LogoImage({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="300"
      height="300"
      viewBox="0 0 120 120"
      className={cn(className)}
      {...props}
    >
      <path d="M80,105H40c-12.15,0-22-9.85-22-22V43c0-12.15,9.85-22,22-22h40c12.15,0,22,9.85,22,22v40 C102,95.15,92.15,105,80,105z" opacity=".35"></path>
      <path fill="#9500ba" d="M80,18h-5.243h-7.476h-8.456H48.482C73.882,27.06,93.843,47.673,102,73.484V62.306v-8.845v-7.712 V40C102,27.85,92.15,18,80,18z"></path>
      <path d="M19.5,45c-0.503,0-1,0.024-1.5,0.038v4C18.5,49.023,18.997,49,19.5,49C47.346,49,70,71.654,70,99.5 c0,0.838-0.023,1.672-0.063,2.5h4c0.038-0.829,0.063-1.662,0.063-2.5C74,69.449,49.551,45,19.5,45z" opacity=".35"></path>
      {/* Add remaining <path>, <circle>, etc. from your SVG here */}
    </svg>
  );
}
