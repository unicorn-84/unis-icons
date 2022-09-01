import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextBolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-bolder_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 15h11a5 5 0 1 1 0 10H8V6h9.5a4.5 4.5 0 1 1 0 9"
      />
    </g>
    <defs>
      <clipPath id="text-bolder_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextBolder;
