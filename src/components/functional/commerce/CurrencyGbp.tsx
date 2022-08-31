import * as React from 'react';
import { SVGProps } from 'react';

const CurrencyGbp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-gbp_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16.5h10m6 9.5H7a4.5 4.5 0 0 0 4.5-4.5v-11A5.5 5.5 0 0 1 17 5a5.438 5.438 0 0 1 3.887 1.612"
      />
    </g>
    <defs>
      <clipPath id="currency-gbp_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CurrencyGbp;
