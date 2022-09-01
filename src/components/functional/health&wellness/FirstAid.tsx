import * as React from 'react';
import { SVGProps } from 'react';

const SvgFirstAid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#first-aid_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-7Z"
      />
    </g>
    <defs>
      <clipPath id="first-aid_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFirstAid;
