import * as React from 'react';
import { SVGProps } from 'react';

const NumberCircleZero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-circle-zero_svg__a)"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 22c2.21 0 4-2.686 4-6s-1.79-6-4-6-4 2.686-4 6 1.79 6 4 6Z"
      />
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
    </g>
    <defs>
      <clipPath id="number-circle-zero_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberCircleZero;
