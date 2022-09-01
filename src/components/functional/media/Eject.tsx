import * as React from 'react';
import { SVGProps } from 'react';

const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#eject_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.262 4.8 5.55 15.325A1 1 0 0 0 6.287 17h19.425a1 1 0 0 0 .738-1.675L16.738 4.8a.987.987 0 0 0-1.476 0v0ZM5 22v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z"
      />
    </g>
    <defs>
      <clipPath id="eject_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEject;
