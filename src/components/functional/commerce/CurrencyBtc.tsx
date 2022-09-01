import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyBtc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-btc_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 15h9a5 5 0 1 1 0 10h-9V6h7.5a4.5 4.5 0 1 1 0 9M8 6h2M8 25h2m3-19V3m4 3V3m-4 25v-3m4 3v-3"
      />
    </g>
    <defs>
      <clipPath id="currency-btc_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyBtc;
