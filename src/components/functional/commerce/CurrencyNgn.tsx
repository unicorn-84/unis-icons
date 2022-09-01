import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyNgn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-ngn_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 18h22M5 14h22M8 26.25V5.75l16 20.5V5.75"
      />
    </g>
    <defs>
      <clipPath id="currency-ngn_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyNgn;
