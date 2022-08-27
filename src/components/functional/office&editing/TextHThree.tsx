import * as React from 'react';
import { SVGProps } from 'react';

const TextHThree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-h-three_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7v15m13-7.5H5M18 7v15m6-8.5h6l-3.5 5a3.499 3.499 0 1 1-2.475 5.975"
      />
    </g>
    <defs>
      <clipPath id="text-h-three_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TextHThree;
