import * as React from 'react';
import { SVGProps } from 'react';

const CurrencyEth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#currency-eth_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 2v28m11-14-11 5-11-5" />
      <path d="m16 2 11 14-11 14L5 16 16 2Z" />
    </g>
    <defs>
      <clipPath id="currency-eth_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CurrencyEth;
