import * as React from 'react';
import { SVGProps } from 'react';

const CornersOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#corners-out_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 6h5v5M11 26H6v-5m20 0v5h-5M6 11V6h5"
      />
    </g>
    <defs>
      <clipPath id="corners-out_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CornersOut;
