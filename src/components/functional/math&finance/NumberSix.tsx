import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberSix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#number-six_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.938 17.5 18 4m-2 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      />
    </g>
    <defs>
      <clipPath id="number-six_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberSix;
