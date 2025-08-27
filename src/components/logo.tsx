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
      JomIG
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
      viewBox="0,0,256,256"
      className={cn("fill-foreground", className)}
      {...props}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
          <path d="M5.947,37.326c-0.472,-0.176..." fill="#ffb900"></path>
          <path d="M6.058,40.91c-0.068,-0.052..." fill="#ffb900"></path>
          <path d="M47.487,7.283c-0.675,-0.013..." fill="#ffcd00"></path>
          <path d="M42.868,3.379c-0.03,0.083..." fill="#ffcd00"></path>
          <path d="M39.463,5.93c-0.146,-0.906..." fill="#ffcd00"></path>
          <path d="M44.166,19.3c-0.154,-2.06..." fill="#ff020a"></path>
          <path d="M31.612,27.249c-0.342,2.86..." fill="#ffffff"></path>
          <path d="M34.894,15.053c-0.043,0..." fill="#ffffff"></path>
          <path d="M40.666,14.088c-0.775,-1.461..." fill="#231f20"></path>
        </g>
      </g>
    </svg>
  );
}
