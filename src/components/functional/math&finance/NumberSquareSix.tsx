import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberSquareSix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-square-six_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM12.975 16.75 17 10" />
      <path d="M16 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    </g>
    <defs>
      <clipPath id="number-square-six_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberSquareSix;
