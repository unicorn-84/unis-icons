import * as React from 'react';
import { SVGProps } from 'react';

const SvgToilet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#toilet_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M8 14V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9M12 8h2m13 6a11 11 0 1 1-22 0h22Z" />
      <path d="m11.7 24.125-.537 3.738A1 1 0 0 0 12.15 29h7.7a1 1 0 0 0 .987-1.137l-.537-3.738" />
    </g>
    <defs>
      <clipPath id="toilet_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgToilet;
