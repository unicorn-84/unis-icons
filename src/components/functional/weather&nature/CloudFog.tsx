import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudFog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cloud-fog_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 24H9m14 0h-3m0 4h-7m-2-16.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7"
      />
    </g>
    <defs>
      <clipPath id="cloud-fog_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudFog;
