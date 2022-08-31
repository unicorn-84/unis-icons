import * as React from 'react';
import { SVGProps } from 'react';

const CurrencyJpy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#currency-jpy_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 21h12m-12-4h12m-6 0v10m9-21-9 11L7 6"
      />
    </g>
    <defs>
      <clipPath id="currency-jpy_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CurrencyJpy;
