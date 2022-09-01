import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#chart-bar_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 26v-9h7m16 9h-25m9 0V11h7m7-6h-7v21h7V5Z"
      />
    </g>
    <defs>
      <clipPath id="chart-bar_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChartBar;
