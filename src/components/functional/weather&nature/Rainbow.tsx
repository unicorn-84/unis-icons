import * as React from 'react';
import { SVGProps } from 'react';

const Rainbow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#rainbow_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22 23v-2a6 6 0 1 0-12 0v2" />
      <path d="M26 23v-2a10 10 0 0 0-20 0v2" />
      <path d="M30 23v-2a14 14 0 0 0-28 0v2" />
    </g>
    <defs>
      <clipPath id="rainbow_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Rainbow;
