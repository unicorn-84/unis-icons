import * as React from 'react';
import { SVGProps } from 'react';

const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#hamburger_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M6.1 12a1 1 0 0 1-.975-1.213C5.925 6.938 10.488 4 16 4s10.075 2.938 10.875 6.787A1 1 0 0 1 25.9 12H6.1ZM26 21v2a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-2" />
      <path d="m3.5 22 5-2 5 2 5-2 5 2 5-2M3 16h26" />
    </g>
    <defs>
      <clipPath id="hamburger_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHamburger;
