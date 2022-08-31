import * as React from 'react';
import { SVGProps } from 'react';

const SunHorizon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sun-horizon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.6 7.375-.963-2.313M5.375 13.6l-2.313-.963m23.563.963 2.313-.963M20.4 7.375l.963-2.313M30 20H2m24 5H6m2.775-5a7.5 7.5 0 1 1 14.45 0"
      />
    </g>
    <defs>
      <clipPath id="sun-horizon_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SunHorizon;
