import * as React from 'react';
import { SVGProps } from 'react';

const NumberTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#number-two_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.475 7.662A6 6 0 0 1 22 10a5.926 5.926 0 0 1-1.025 3.35v0L10 28h12"
      />
    </g>
    <defs>
      <clipPath id="number-two_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberTwo;
