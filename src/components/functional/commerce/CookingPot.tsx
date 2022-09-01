import * as React from 'react';
import { SVGProps } from 'react';

const SvgCookingPot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cooking-pot_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v4m4-4v4m4-4v4M6 10h20a1 1 0 0 1 1 1v12a2.988 2.988 0 0 1-3 3H8a2.986 2.986 0 0 1-3-3V11a1 1 0 0 1 1-1Zm25 2-4 3M1 12l4 3"
      />
    </g>
    <defs>
      <clipPath id="cooking-pot_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCookingPot;
