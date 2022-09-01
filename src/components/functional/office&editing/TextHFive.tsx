import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextHFive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-h-five_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7v15m13-7.5H5M18 7v15m12-8.5h-5.025L24 19.525a3.5 3.5 0 1 1 0 4.95"
      />
    </g>
    <defs>
      <clipPath id="text-h-five_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextHFive;
