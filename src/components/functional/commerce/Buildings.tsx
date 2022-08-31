import * as React from 'react';
import { SVGProps } from 'react';

const Buildings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#buildings_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 27h28m-12 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22m24 0V13a1 1 0 0 0-1-1h-9M8 9h4m-2 8h4m-6 5h4m10 0h2m-2-5h2"
      />
    </g>
    <defs>
      <clipPath id="buildings_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Buildings;
