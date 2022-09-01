import * as React from 'react';
import { SVGProps } from 'react';

const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#umbrella_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22 25a3 3 0 0 1-6 0v-8" />
      <path d="M4.037 17a.987.987 0 0 1-.987-1.088 13 13 0 0 1 25.9 0A.988.988 0 0 1 27.962 17H4.038Z" />
      <path d="M11 17c0-9 5-13 5-13s5 4 5 13" />
    </g>
    <defs>
      <clipPath id="umbrella_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUmbrella;
