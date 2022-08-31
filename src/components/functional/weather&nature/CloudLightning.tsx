import * as React from 'react';
import { SVGProps } from 'react';

const CloudLightning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#cloud-lightning_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m16 30 3.288-5H13l3.288-5" />
      <path d="M11 11.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7" />
    </g>
    <defs>
      <clipPath id="cloud-lightning_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CloudLightning;
