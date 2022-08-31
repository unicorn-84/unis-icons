import * as React from 'react';
import { SVGProps } from 'react';

const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#moon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27.087 19.075A11.487 11.487 0 0 1 12.925 4.913a11.5 11.5 0 1 0 14.162 14.162v0Z"
      />
    </g>
    <defs>
      <clipPath id="moon_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Moon;
