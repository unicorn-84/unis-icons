import * as React from 'react';
import { SVGProps } from 'react';

const NumberSquareTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-square-two_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <path d="M13.238 11.838A3 3 0 0 1 19 13a2.95 2.95 0 0 1-.512 1.675v0L13 22h6" />
    </g>
    <defs>
      <clipPath id="number-square-two_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberSquareTwo;
