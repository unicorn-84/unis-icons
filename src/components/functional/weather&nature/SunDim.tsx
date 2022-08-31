import * as React from 'react';
import { SVGProps } from 'react';

const SunDim = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sun-dim_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 23.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-19v-1M7.863 7.862l-.7-.7M4.5 16h-1m4.363 8.137-.7.7M16 27.5v1m8.137-4.363.7.7M27.5 16h1m-4.363-8.138.7-.7"
      />
    </g>
    <defs>
      <clipPath id="sun-dim_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SunDim;
