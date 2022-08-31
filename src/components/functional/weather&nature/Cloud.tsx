import * as React from 'react';
import { SVGProps } from 'react';

const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cloud_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 16a10 10 0 1 1 10 10H9a7 7 0 0 1 0-14c.586 0 1.17.071 1.738.213"
      />
    </g>
    <defs>
      <clipPath id="cloud_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Cloud;
