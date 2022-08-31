import * as React from 'react';
import { SVGProps } from 'react';

const Sunglasses = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sunglasses_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 17.5v3a4.5 4.5 0 1 1-9 0v-3m24 0v3a4.5 4.5 0 1 1-9 0v-3M25 6a2.987 2.987 0 0 1 3 3v8.5H4V9a2.987 2.987 0 0 1 3-3m14 11.5 5.925 5.925M6 17.5l5.925 5.925"
      />
    </g>
    <defs>
      <clipPath id="sunglasses_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Sunglasses;
