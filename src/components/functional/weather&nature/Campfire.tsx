import * as React from 'react';
import { SVGProps } from 'react';

const SvgCampfire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#campfire_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m5 21 22 7m0-7L5 28m14-11a3 3 0 0 1-6 0c0-3 3-5 3-5s3 2 3 5Z" />
      <path d="M22.5 13.5a6.5 6.5 0 1 1-13 0C9.5 8 16 4 16 4s6.5 4 6.5 9.5Z" />
    </g>
    <defs>
      <clipPath id="campfire_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCampfire;
