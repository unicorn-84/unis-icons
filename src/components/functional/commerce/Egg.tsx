import * as React from 'react';
import { SVGProps } from 'react';

const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#egg_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26 19a10 10 0 0 1-20 0c0-8 6-16 10-16s10 8 10 16Z"
      />
    </g>
    <defs>
      <clipPath id="egg_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEgg;
