import * as React from 'react';
import { SVGProps } from 'react';

const BriefcaseMetal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#briefcase-metal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 9H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-6 0V7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2M4 22h24M4 14h24"
      />
    </g>
    <defs>
      <clipPath id="briefcase-metal_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default BriefcaseMetal;