import * as React from 'react';
import { SVGProps } from 'react';

const SvgTreeEvergreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tree-evergreen_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 2 6 15h5l-7 9h24l-7-9h5L16 2Zm0 22v6"
      />
    </g>
    <defs>
      <clipPath id="tree-evergreen_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTreeEvergreen;
