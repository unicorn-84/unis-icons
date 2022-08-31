import * as React from 'react';
import { SVGProps } from 'react';

const CurrencyInr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-inr_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 10h16M9 5h16M13.5 5a6.5 6.5 0 0 1 0 13H9l11 10"
      />
    </g>
    <defs>
      <clipPath id="currency-inr_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CurrencyInr;
