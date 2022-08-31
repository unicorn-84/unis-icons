import * as React from 'react';
import { SVGProps } from 'react';

const CloudRain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cloud-rain_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16 30 3.288-5m-6.95 1 3.95-6M11 11.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7"
      />
    </g>
    <defs>
      <clipPath id="cloud-rain_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CloudRain;
