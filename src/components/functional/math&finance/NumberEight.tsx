import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberEight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#number-eight_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22.35 8.962a5.786 5.786 0 0 1-1.863 4.213 6.662 6.662 0 0 1-8.975 0 5.701 5.701 0 0 1 0-8.425 6.625 6.625 0 0 1 8.975 0 5.749 5.749 0 0 1 1.863 4.212v0Z" />
      <path d="M23.5 21.962a6.8 6.8 0 0 1-2.2 4.976 7.837 7.837 0 0 1-10.6 0 6.737 6.737 0 0 1 0-9.963 7.837 7.837 0 0 1 10.6 0 6.801 6.801 0 0 1 2.2 4.987Z" />
    </g>
    <defs>
      <clipPath id="number-eight_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberEight;
