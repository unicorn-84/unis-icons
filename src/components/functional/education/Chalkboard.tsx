import * as React from 'react';
import { SVGProps } from 'react';

const Chalkboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#chalkboard_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 25V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v18M2 25h28" />
      <path d="M15 25v-4h9v4" />
      <path d="M8 25V10h16v7" />
    </g>
    <defs>
      <clipPath id="chalkboard_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Chalkboard;
