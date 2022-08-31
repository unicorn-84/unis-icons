import * as React from 'react';
import { SVGProps } from 'react';

const Receipt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#receipt_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 13h13m-13 4h13M4 26V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v19l-4-2-4 2-4-2-4 2-4-2-4 2Z"
      />
    </g>
    <defs>
      <clipPath id="receipt_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Receipt;
