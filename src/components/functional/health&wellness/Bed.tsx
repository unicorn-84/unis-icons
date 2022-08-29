import * as React from 'react';
import { SVGProps } from 'react';

const Bed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#bed_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 21V10h13a4 4 0 0 1 4 4v7M2 26V6m0 15h28v5M13 10H2"
      />
    </g>
    <defs>
      <clipPath id="bed_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Bed;
