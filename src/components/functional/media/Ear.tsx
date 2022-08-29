import * as React from 'react';
import { SVGProps } from 'react';

const Ear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#ear_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22.5 19a2.5 2.5 0 0 1-5 0c0-3 3.5-3 3.5-6a5 5 0 1 0-10 0" />
      <path d="M20.238 27a5.5 5.5 0 0 1-9.738-3.5C10.5 18.312 6 20 6 13a10 10 0 1 1 20 0" />
    </g>
    <defs>
      <clipPath id="ear_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Ear;
