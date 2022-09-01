import * as React from 'react';
import { SVGProps } from 'react';

const SvgBathtub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#bathtub_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M9 24v3m14-3v3M7 13V6.5a2.5 2.5 0 1 1 5 0M25 12h-8v6h8v-6Z" />
      <path d="M25 13h4a1 1 0 0 1 1 1v4a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-4a1 1 0 0 1 1-1h14" />
    </g>
    <defs>
      <clipPath id="bathtub_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBathtub;
