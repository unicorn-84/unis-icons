import * as React from 'react';
import { SVGProps } from 'react';

const SvgBalloon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#balloon_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 13c0 5.525-4.475 12-10 12S6 18.525 6 13a10 10 0 1 1 20 0v0Z" />
      <path d="M17.35 24.875 19 29h-6l1.65-4.125M17 7.087A5.975 5.975 0 0 1 21.913 12" />
    </g>
    <defs>
      <clipPath id="balloon_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBalloon;
