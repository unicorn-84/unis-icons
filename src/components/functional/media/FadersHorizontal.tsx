import * as React from 'react';
import { SVGProps } from 'react';

const SvgFadersHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#faders-horizontal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 21.5H5m22 0h-6m-12-11H5m22 0H13m0-3v6m8 11v-6"
      />
    </g>
    <defs>
      <clipPath id="faders-horizontal_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFadersHorizontal;
