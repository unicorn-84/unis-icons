import * as React from 'react';
import { SVGProps } from 'react';

const Gift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#gift_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 10H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 6v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9m10-6v16m5.663-17.412C20.238 10 16 10 16 10s0-4.237 1.413-5.662a3.005 3.005 0 0 1 4.25 4.25v0Zm-11.325 0C11.763 10 16 10 16 10s0-4.237-1.412-5.662a3.005 3.005 0 0 0-4.25 4.25v0Z"
      />
    </g>
    <defs>
      <clipPath id="gift_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Gift;
