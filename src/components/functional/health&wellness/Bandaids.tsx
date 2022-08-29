import * as React from 'react';
import { SVGProps } from 'react';

const Bandaids = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#bandaids_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.175 11.825a4 4 0 0 1 5.65-5.65l14 14a4 4 0 0 1-5.65 5.65l-14-14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.175 6.175a4 4 0 0 1 5.65 5.65l-14 14a4 4 0 0 1-5.65-5.65l14-14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 16.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="bandaids_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Bandaids;
