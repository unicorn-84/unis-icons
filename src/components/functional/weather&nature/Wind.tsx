import * as React from 'react';
import { SVGProps } from 'react';

const SvgWind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#wind_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.188 24.038A3 3 0 1 0 19 20H5m7.188-12.037A3 3 0 1 1 15 12H3m20.188-.037A3 3 0 1 1 26 16H4"
      />
    </g>
    <defs>
      <clipPath id="wind_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWind;
