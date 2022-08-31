import * as React from 'react';
import { SVGProps } from 'react';

const Barcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#barcode_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23 6h5v5M9 26H4v-5m24 0v5h-5M4 11V6h5m1 5v10m12-10v10m-4-10v10m-4-10v10"
      />
    </g>
    <defs>
      <clipPath id="barcode_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Barcode;
