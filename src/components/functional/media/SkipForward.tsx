import * as React from 'react';
import { SVGProps } from 'react';

const SkipForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#skip-forward_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.6 15.15 8.525 5.925A1 1 0 0 0 7 6.788v18.425a1 1 0 0 0 1.525.862L23.6 16.85a1 1 0 0 0 0-1.7ZM25 5v22"
      />
    </g>
    <defs>
      <clipPath id="skip-forward_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SkipForward;
