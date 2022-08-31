import * as React from 'react';
import { SVGProps } from 'react';

const Waves = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#waves_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9s5-4 11 0 11 0 11 0M5 16s5-4 11 0 11 0 11 0M5 23s5-4 11 0 11 0 11 0"
      />
    </g>
    <defs>
      <clipPath id="waves_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Waves;
