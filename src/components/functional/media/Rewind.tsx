import * as React from 'react';
import { SVGProps } from 'react';

const SvgRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#rewind_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1.812 15.162 11.15-7.175a1 1 0 0 1 1.538.85v14.325a1 1 0 0 1-1.537.85l-11.15-7.175a.987.987 0 0 1 0-1.675v0Zm14.001 0 11.15-7.175a1 1 0 0 1 1.537.85v14.325a1 1 0 0 1-1.538.85l-11.15-7.175a.988.988 0 0 1 0-1.675v0Z"
      />
    </g>
    <defs>
      <clipPath id="rewind_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRewind;
