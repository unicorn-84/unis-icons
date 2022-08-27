import * as React from 'react';
import { SVGProps } from 'react';

const SortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sort-descending_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 11 5-5 5 5m-5 7V6M6 16h9M6 8h7M6 24h17"
      />
    </g>
    <defs>
      <clipPath id="sort-descending_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SortDescending;
