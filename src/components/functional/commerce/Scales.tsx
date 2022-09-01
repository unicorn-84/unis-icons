import * as React from 'react';
import { SVGProps } from 'react';

const SvgScales = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#scales_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 5v22m-3 0h6M7 11l18-4M3 21c0 2.212 2.5 3 4 3s4-.788 4-3L7 11 3 21Zm18-4c0 2.212 2.5 3 4 3s4-.788 4-3L25 7l-4 10Z"
      />
    </g>
    <defs>
      <clipPath id="scales_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScales;
