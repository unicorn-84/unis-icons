import * as React from 'react';
import { SVGProps } from 'react';

const RainbowCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#rainbow-cloud_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 25c-1.663 0-3-1.387-3-3.113 0-1.724 1.337-3.112 3-3.112a2.7 2.7 0 0 1 1.1.225 5 5 0 1 1 4.9 6h-6ZM2 22v-2a12 12 0 0 1 20.363-8.6" />
      <path d="M6 22v-2a8 8 0 0 1 12.738-6.45" />
      <path d="M10 22v-2a4 4 0 0 1 4-4c.312-.001.623.037.925.113" />
    </g>
    <defs>
      <clipPath id="rainbow-cloud_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default RainbowCloud;
