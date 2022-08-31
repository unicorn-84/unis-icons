import * as React from 'react';
import { SVGProps } from 'react';

const ForkKnife = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#fork-knife_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 4v5m0 5.5V28M14 4l1 6a4.5 4.5 0 1 1-9 0l1-6m18.5 16h-7s1.5-14 7-16v24"
      />
    </g>
    <defs>
      <clipPath id="fork-knife_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ForkKnife;
