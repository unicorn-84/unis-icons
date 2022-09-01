import * as React from 'react';
import { SVGProps } from 'react';

const SvgQueue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#queue_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8h22M5 16h12M5 24h12m13-4-8 5V15l8 5Z"
      />
    </g>
    <defs>
      <clipPath id="queue_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgQueue;
