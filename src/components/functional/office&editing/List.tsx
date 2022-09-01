import * as React from 'react';
import { SVGProps } from 'react';

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#list_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 16h22M5 8h22M5 24h22"
      />
    </g>
    <defs>
      <clipPath id="list_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgList;
