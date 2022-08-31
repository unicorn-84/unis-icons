import * as React from 'react';
import { SVGProps } from 'react';

const Coffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#coffee_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M11 3v4m4-4v4m4-4v4M4 27h22m-15.588 0A11 11 0 0 1 4 17v-6h22v6a11 11 0 0 1-6.413 10" />
      <path d="M26 11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-.425" />
    </g>
    <defs>
      <clipPath id="coffee_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Coffee;
