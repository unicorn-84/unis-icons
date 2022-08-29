import * as React from 'react';
import { SVGProps } from 'react';

const Brain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#brain_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 22V10m-5 8a5 5 0 1 1-5 5v-.837" />
      <path d="M21 18a4.999 4.999 0 1 0 5 5v-.837" />
      <path d="M9 22.5H8a6 6 0 0 1-2-11.662V9a5 5 0 0 1 10 0v14m7-.5h1a6 6 0 0 0 2-11.662V9a5 5 0 0 0-10 0" />
      <path d="M11 10.5v1A3.5 3.5 0 0 1 7.5 15M21 10.5v1a3.5 3.5 0 0 0 3.5 3.5" />
    </g>
    <defs>
      <clipPath id="brain_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Brain;
