import * as React from 'react';
import { SVGProps } from 'react';

const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#lifebuoy_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
      <path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3.537-8.537-4.95-4.95m12.025 4.95 4.95-4.95m-4.95 12.025 4.95 4.95m-12.025-4.95-4.95 4.95" />
    </g>
    <defs>
      <clipPath id="lifebuoy_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLifebuoy;
