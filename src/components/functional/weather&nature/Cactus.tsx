import * as React from 'react';
import { SVGProps } from 'react';

const SvgCactus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cactus_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 27h22m-15 0V16.5h-1.5A7.5 7.5 0 0 1 3 9v0a2.513 2.513 0 0 1 2.5-2.5A2.513 2.513 0 0 1 8 9a2.512 2.512 0 0 0 2.5 2.5H12V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v9.5h1.5A2.512 2.512 0 0 0 24 14v0a2.512 2.512 0 0 1 2.5-2.5A2.512 2.512 0 0 1 29 14v0a7.5 7.5 0 0 1-7.5 7.5H20V27"
      />
    </g>
    <defs>
      <clipPath id="cactus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCactus;
