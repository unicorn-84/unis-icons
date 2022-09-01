import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberZero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#number-zero_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 29c4.97 0 9-5.82 9-13S20.97 3 16 3 7 8.82 7 16s4.03 13 9 13Z"
      />
    </g>
    <defs>
      <clipPath id="number-zero_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberZero;
