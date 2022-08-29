import * as React from 'react';
import { SVGProps } from 'react';

const FastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#fast-forward_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m30.188 15.162-11.15-7.175a1 1 0 0 0-1.538.85v14.326a1 1 0 0 0 1.538.85l11.15-7.176a.988.988 0 0 0 0-1.675v0Zm-14 0L5.037 7.987a1 1 0 0 0-1.538.85v14.326a1 1 0 0 0 1.538.85l11.15-7.176a.988.988 0 0 0 0-1.675v0Z"
      />
    </g>
    <defs>
      <clipPath id="fast-forward_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FastForward;
