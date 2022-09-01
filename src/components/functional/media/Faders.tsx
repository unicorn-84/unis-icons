import * as React from 'react';
import { SVGProps } from 'react';

const SvgFaders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#faders_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 15v12m0-22v6m9 14v2m0-22v16m3 0h-6M7 21v6M7 5v12m-3 0h6m9-6h-6"
      />
    </g>
    <defs>
      <clipPath id="faders_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFaders;
