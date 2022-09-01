import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cloud-snow_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 11.5a8.5 8.5 0 1 1 8.5 8.5h-10a5.5 5.5 0 1 1 1.787-10.7"
      />
      <path
        fill="currentColor"
        d="M9.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="cloud-snow_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloudSnow;
