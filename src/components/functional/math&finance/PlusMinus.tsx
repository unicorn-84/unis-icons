import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#plus-minus_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 7 7 25M4 9h10M9 4v10m9 9h10"
      />
    </g>
    <defs>
      <clipPath id="plus-minus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlusMinus;
