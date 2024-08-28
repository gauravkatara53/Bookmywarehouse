// VillaSVG.tsx
import React from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const VillaSVG: React.FC<CustomSVGProps> = ({
  color = "#888B97",
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 21H4C3.45 21 3 20.55 3 20V8.69C3 8.27 3.25 7.9 3.64 7.75L14.64 3.52C14.7921 3.46132 14.9561 3.4407 15.118 3.45992C15.2798 3.47915 15.4345 3.53765 15.5686 3.63031C15.7027 3.72298 15.8121 3.84702 15.8873 3.99162C15.9624 4.13623 16.0012 4.29702 16 4.46V10H8C7.45 10 7 10.45 7 11V21ZM17 12H10C9.45 12 9 12.45 9 13V20C9 20.55 9.45 21 10 21H14V17C14 16.45 14.45 16 15 16C15.55 16 16 16.45 16 17V21H20C20.55 21 21 20.55 21 20V12C21 10.9 20.1 10 19 10C17.9 10 17 10.9 17 12Z"
        fill={color}
      />
    </svg>
  );
};

export default VillaSVG;
