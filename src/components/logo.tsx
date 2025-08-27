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
      <div
        className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
      >
        <span className="select-none">Jom IG</span>
      </div>
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
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <g
        fill="#ff0059"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(3.55556,3.55556)">
          <path d="M35.75,14c-20.171,0 -21.75,1.579 -21.75,21.75v0.5c0,20.171 1.579,21.75 21.75,21.75h0.5c20.171,0 21.75,-1.579 21.75,-21.75v-0.5c0,-20.171 -1.579,-21.75 -21.75,-21.75zM48.99609,22.5c0.829,-0.002 1.50191,0.66809 1.50391,1.49609c0.002,0.829 -0.66709,1.50191 -1.49609,1.50391c-0.829,0.002 -1.50191,-0.66709 -1.50391,-1.49609c-0.002,-0.829 0.66709,-1.50191 1.49609,-1.50391zM35.97656,26c5.522,-0.013 10.01044,4.45456 10.02344,9.97656c0.013,5.522 -4.45456,10.01044 -9.97656,10.02344c-5.522,0.013 -10.01044,-4.45456 -10.02344,-9.97656c-0.013,-5.522 4.45456,-10.01044 9.97656,-10.02344zM35.99023,32c-2.209,0.006 -3.99523,1.80077 -3.99023,4.00977c0.006,2.209 1.80077,3.99523 4.00977,3.99023c2.209,-0.005 3.99523,-1.80077 3.99023,-4.00977c-0.006,-2.209 -1.80077,-3.99523 -4.00977,-3.99023z"></path>
        </g>
      </g>
    </svg>
  );
}
