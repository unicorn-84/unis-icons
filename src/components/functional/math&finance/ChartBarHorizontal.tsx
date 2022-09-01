import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartBarHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#chart-bar-horizontal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 27V5m0 2h16v6m6 0H5v6h22v-6Zm-10 6v6H5"
      />
    </g>
    <defs>
      <clipPath id="chart-bar-horizontal_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChartBarHorizontal;
