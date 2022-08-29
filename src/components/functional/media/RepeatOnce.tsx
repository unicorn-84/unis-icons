import * as React from 'react';
import { SVGProps } from 'react';

const RepeatOnce = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#repeat-once_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m25 11 3-3-3-3" />
      <path d="M4 16a8.013 8.013 0 0 1 8-8h16M7 21l-3 3 3 3" />
      <path d="M28 16a8.012 8.012 0 0 1-8 8H4m10.5-10 2-1v6" />
    </g>
    <defs>
      <clipPath id="repeat-once_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default RepeatOnce;
