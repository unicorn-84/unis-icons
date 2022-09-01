import * as React from 'react';
import { SVGProps } from 'react';

const SvgLadderSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ladder-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 4v24M24 4v24M8 9h16M8 16h16M8 23h16"
      />
    </g>
    <defs>
      <clipPath id="ladder-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLadderSimple;
