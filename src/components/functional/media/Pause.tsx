import * as React from 'react';
import { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#pause_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 5h-4.5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1H25a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM11.5 5H7a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"
      />
    </g>
    <defs>
      <clipPath id="pause_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPause;
