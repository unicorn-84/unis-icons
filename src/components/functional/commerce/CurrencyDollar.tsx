import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-dollar_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 3v26m7-18a5 5 0 0 0-5-5h-4.5a5 5 0 1 0 0 10H19a5 5 0 1 1 0 10h-6a5 5 0 0 1-5-5"
      />
    </g>
    <defs>
      <clipPath id="currency-dollar_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyDollar;
