import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyCny = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-cny_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8h16M6 15h20m-7 0v7a2.988 2.988 0 0 0 3 3h5v-3m-14-7v2a8.012 8.012 0 0 1-8 8"
      />
    </g>
    <defs>
      <clipPath id="currency-cny_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyCny;
