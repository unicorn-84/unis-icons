import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyEur = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-eur_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.363 24.363A9 9 0 0 1 8 18v-4a9 9 0 0 1 15.363-6.362M5 14h12M5 18h10"
      />
    </g>
    <defs>
      <clipPath id="currency-eur_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyEur;
