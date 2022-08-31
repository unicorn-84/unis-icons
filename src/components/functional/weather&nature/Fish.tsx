import * as React from 'react';
import { SVGProps } from 'react';

const Fish = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#fish_svg__a)">
      <path
        fill="currentColor"
        d="M19.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.288 20.988H23a6 6 0 0 1-6-6A6 6 0 0 1 11 9a2.209 2.209 0 0 1 .012-.287"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.775 19.15 1 22l7 2 2 7 2.85-6.775c17.3-.413 15-15.363 14.3-18.613a1.025 1.025 0 0 0-.762-.762c-3.25-.7-18.2-3-18.613 14.3v0Z"
      />
    </g>
    <defs>
      <clipPath id="fish_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Fish;
