import * as React from 'react';
import { SVGProps } from 'react';

const Trophy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7v6.887c0 4.963 3.975 9.075 8.938 9.113A9 9 0 0 0 25 14V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Zm5 21h8m-4-5v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.775 16H26a4 4 0 0 0 4-4v-2a1 1 0 0 0-1-1h-4M7.25 16H5.987a4 4 0 0 1-4-4v-2a1 1 0 0 1 1-1h4"
    />
  </svg>
);

export default Trophy;
