import * as React from 'react';
import { SVGProps } from 'react';

const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sun_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 23.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-19V2M7.862 7.862 6.1 6.1M4.5 16H2m5.862 8.137L6.1 25.9m9.9 1.6V30m8.137-5.863L25.9 25.9m1.6-9.9H30m-5.863-8.138L25.9 6.1"
      />
    </g>
    <defs>
      <clipPath id="sun_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Sun;
