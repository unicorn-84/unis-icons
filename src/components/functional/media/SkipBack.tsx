import * as React from 'react';
import { SVGProps } from 'react';

const SvgSkipBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#skip-back_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8.4 15.15 15.075-9.225A1 1 0 0 1 25 6.788v18.425a1 1 0 0 1-1.525.862L8.4 16.85a1 1 0 0 1 0-1.7ZM7 5v22"
      />
    </g>
    <defs>
      <clipPath id="skip-back_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSkipBack;
