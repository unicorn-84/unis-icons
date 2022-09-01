import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#cloud-moon_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M11 18.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7" />
      <path d="M5.875 17.363A8.012 8.012 0 0 1 1.2 11.8v0a8.012 8.012 0 0 0 9.6-9.6A8 8 0 0 1 17 10c0 .125 0 .25-.012.375" />
    </g>
    <defs>
      <clipPath id="cloud-moon_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudMoon;
