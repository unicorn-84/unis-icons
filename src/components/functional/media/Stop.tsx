import * as React from 'react';
import { SVGProps } from 'react';

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#stop_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24.637 6.5H7.363a.862.862 0 0 0-.863.862v17.275c0 .477.386.863.862.863h17.275a.863.863 0 0 0 .863-.863V7.363a.863.863 0 0 0-.863-.863Z"
      />
    </g>
    <defs>
      <clipPath id="stop_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStop;
