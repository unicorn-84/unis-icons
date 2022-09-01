import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberFive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#number-five_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 4H11.963L10 16.05a7.05 7.05 0 0 1 9.938 0 6.974 6.974 0 0 1 0 9.9 7.05 7.05 0 0 1-9.938 0"
      />
    </g>
    <defs>
      <clipPath id="number-five_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberFive;
