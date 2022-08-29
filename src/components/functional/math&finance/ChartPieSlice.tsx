import * as React from 'react';
import { SVGProps } from 'react';

const ChartPieSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#chart-pie-slice_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 16V4m10.388 6L5.613 22M4.2 18.2A11.612 11.612 0 0 1 4 16a11.987 11.987 0 0 1 8-11.313v9L4.2 18.2Z" />
      <path d="M16 4A12 12 0 1 1 5.65 22.075" />
    </g>
    <defs>
      <clipPath id="chart-pie-slice_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ChartPieSlice;
