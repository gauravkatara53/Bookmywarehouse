import React from "react";

// Extend SVGProps to include custom props like color
interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const HouseSVG: React.FC<CustomSVGProps> = ({
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
      {...props} // Spread any additional SVG props
    >
      <path
        d="M21.0001 10.8319V19.5C20.9999 19.7719 20.9263 20.0386 20.7869 20.272C20.6475 20.5054 20.4477 20.6968 20.2085 20.8259C19.9917 20.9432 19.7486 21.0031 19.5022 20.9999H14.9968C14.7979 20.9999 14.6071 20.9209 14.4665 20.7803C14.3258 20.6396 14.2468 20.4488 14.2468 20.2499V15.7493C14.2468 15.5504 14.1678 15.3596 14.0271 15.2189C13.8865 15.0783 13.6957 14.9993 13.4968 14.9993H10.4968C10.2979 14.9993 10.1071 15.0783 9.96649 15.2189C9.82584 15.3596 9.74682 15.5504 9.74682 15.7493V20.2499C9.74682 20.4488 9.6678 20.6396 9.52715 20.7803C9.3865 20.9209 9.19573 20.9999 8.99682 20.9999H4.50029C4.28764 21.0005 4.07732 20.9556 3.88345 20.8682C3.68957 20.7808 3.5166 20.653 3.37613 20.4934C3.12955 20.2082 2.9958 19.8427 3.0001 19.4657V10.8318C3.00026 10.6228 3.04401 10.4162 3.12855 10.225C3.21309 10.0339 3.33655 9.86251 3.49107 9.7218L10.9904 2.90308C11.2659 2.65075 11.6259 2.51078 11.9995 2.51074C12.373 2.51071 12.733 2.65062 13.0086 2.90289L20.5092 9.72189C20.6637 9.86263 20.7871 10.034 20.8717 10.2252C20.9562 10.4163 20.9999 10.6229 21.0001 10.8319Z"
        fill={color}
      />
    </svg>
  );
};

export default HouseSVG;
