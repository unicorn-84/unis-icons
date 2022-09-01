import * as React from 'react';
import { SVGProps } from 'react';

const SvgLadder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ladder_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23 5H11m2 0L5 27m8 0 8-22M8.637 17h8m-5.824-6h8M6.45 23h8M19.5 9.125 26 27m-10.45-7h7.9"
      />
    </g>
    <defs>
      <clipPath id="ladder_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLadder;
