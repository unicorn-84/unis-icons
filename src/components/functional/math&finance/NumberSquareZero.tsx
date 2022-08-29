import * as React from 'react';
import { SVGProps } from 'react';

const NumberSquareZero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-square-zero_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 22c2.21 0 4-2.686 4-6s-1.79-6-4-6-4 2.686-4 6 1.79 6 4 6Z" />
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
    </g>
    <defs>
      <clipPath id="number-square-zero_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberSquareZero;
