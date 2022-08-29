import * as React from 'react';
import { SVGProps } from 'react';

const Sliders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sliders_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 13.5V27m0-22v3.5m0 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9 10V27m0-22v13.5m0 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-18-4V27M7 5v9.5m0 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </g>
    <defs>
      <clipPath id="sliders_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Sliders;
