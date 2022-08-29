import * as React from 'react';
import { SVGProps } from 'react';

const NumberCircleFour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-circle-four_svg__a)"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.5 9.5-3 8.5h6m0-4v8"
      />
    </g>
    <defs>
      <clipPath id="number-circle-four_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NumberCircleFour;
