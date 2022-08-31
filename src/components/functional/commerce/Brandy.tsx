import * as React from 'react';
import { SVGProps } from 'react';

const Brandy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#brandy_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 22v6m-5 0h10m4.225-23a11 11 0 1 1-18.45 0h18.45ZM5 11h22"
      />
    </g>
    <defs>
      <clipPath id="brandy_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Brandy;
