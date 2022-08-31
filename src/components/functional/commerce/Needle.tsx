import * as React from 'react';
import { SVGProps } from 'react';

const Needle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#needle_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m23 9-2 2m1.825 3.825 3-3a4 4 0 0 0-5.65-5.65l-3 3C16 16 5 27 5 27s11-11 17.825-12.175Z"
      />
    </g>
    <defs>
      <clipPath id="needle_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Needle;
