import * as React from 'react';
import { SVGProps } from 'react';

const SvgBeerBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#beer-bottle_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m26 2 4 4m-3-3-8 6-5 1L3.413 20.587a2.012 2.012 0 0 0 0 2.826l5.175 5.174a2.013 2.013 0 0 0 2.825 0L22 18l1-5 6-8m-17 7 8 8m-7 7-8-8"
      />
    </g>
    <defs>
      <clipPath id="beer-bottle_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBeerBottle;
