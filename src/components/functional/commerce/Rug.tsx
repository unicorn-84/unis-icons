import * as React from 'react';
import { SVGProps } from 'react';

const SvgRug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#rug_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M25 6H7v20h18V6ZM7 6V3m6 3V3m12 3V3M7 29v-3m6 3v-3m6-20V3m0 26v-3m6 3v-3" />
      <path d="m16 11-3 5 3 5 3-5-3-5Z" />
    </g>
    <defs>
      <clipPath id="rug_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRug;
