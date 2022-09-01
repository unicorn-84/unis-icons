import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrademarkRegistered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#trademark-registered_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
      <path d="M13 17h4a3 3 0 0 0 0-6h-4v10m4.2-4.012L20 21" />
    </g>
    <defs>
      <clipPath id="trademark-registered_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTrademarkRegistered;
