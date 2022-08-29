import * as React from 'react';
import { SVGProps } from 'react';

const NumberCircleEight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-circle-eight_svg__a)"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 12.75a2.737 2.737 0 1 1-.8-1.95c.512.52.799 1.22.8 1.95Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.25 18.75a3.238 3.238 0 1 1-6.475-.018 3.238 3.238 0 0 1 6.475.018Z"
      />
    </g>
    <defs>
      <clipPath id="number-circle-eight_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberCircleEight;
