import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberNine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#number-nine_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.063 14.5 13.975 28M16 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      />
    </g>
    <defs>
      <clipPath id="number-nine_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberNine;
