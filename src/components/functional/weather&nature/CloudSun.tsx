import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#cloud-sun_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M11 18.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7M9.963 7.088l-.525-2.95m-3.35 5.424L3.625 7.837m1.463 6.2-2.95.525m12.3-6.474 1.725-2.463" />
      <path d="M6.45 16.925a6.138 6.138 0 0 1-1.363-2.888 6 6 0 0 1 11.388-3.487" />
    </g>
    <defs>
      <clipPath id="cloud-sun_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudSun;
