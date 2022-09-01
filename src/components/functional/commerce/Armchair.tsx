import * as React from 'react';
import { SVGProps } from 'react';

const SvgArmchair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#armchair_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10 17h12M6 12V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v3" />
      <path d="M10 21v-5a4 4 0 1 0-4 4v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a4 4 0 1 0-4-4v5" />
    </g>
    <defs>
      <clipPath id="armchair_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArmchair;
