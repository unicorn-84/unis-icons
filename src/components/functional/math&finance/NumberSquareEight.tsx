import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberSquareEight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-square-eight_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M18.75 12.75a2.737 2.737 0 1 1-.8-1.95c.512.52.799 1.22.8 1.95Z" />
      <path d="M19.25 18.75a3.238 3.238 0 1 1-6.475-.018 3.238 3.238 0 0 1 6.475.018Z" />
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
    </g>
    <defs>
      <clipPath id="number-square-eight_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberSquareEight;
