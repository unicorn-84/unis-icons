import * as React from 'react';
import { SVGProps } from 'react';

const SvgSlidersHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sliders-horizontal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 21.5H5m22 0h-3.5M21 24a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10.5 10.5H5m22 0H15.5M13 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </g>
    <defs>
      <clipPath id="sliders-horizontal_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSlidersHorizontal;
