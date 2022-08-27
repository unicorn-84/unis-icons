import * as React from 'react';
import { SVGProps } from 'react';

const TextAa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#text-aa_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 24 10 7 1 24m25 .363c2.21 0 4-1.567 4-3.5s-1.79-3.5-4-3.5-4 1.567-4 3.5 1.79 3.5 4 3.5Z" />
      <path d="M23 14.05a4.262 4.262 0 0 1 3-1.188c2.212 0 4 1.563 4 3.5V24m-13.65-5H3.65" />
    </g>
    <defs>
      <clipPath id="text-aa_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TextAa;
