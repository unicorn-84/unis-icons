import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sort-ascending_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 21 5 5 5-5m-5-7v12M6 16h9M6 8h17M6 24h7"
      />
    </g>
    <defs>
      <clipPath id="sort-ascending_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSortAscending;
