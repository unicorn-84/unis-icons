import * as React from 'react';
import { SVGProps } from 'react';

const TrendUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#trend-up_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M29 7 17 19l-5-5-9 9" />
      <path d="M29 15V7h-8" />
    </g>
    <defs>
      <clipPath id="trend-up_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TrendUp;
