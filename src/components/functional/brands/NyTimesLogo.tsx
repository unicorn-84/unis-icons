import * as React from 'react';
import { SVGProps } from 'react';

const NyTimesLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.488 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.7 20.425A10 10 0 1 1 15.988 8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 11.488A3.5 3.5 0 0 1 8.75 4.5l14.5 7a3.5 3.5 0 1 0 0-7M6.075 19.288 15.988 14v14m-4-11.863v11.026"
    />
  </svg>
);

export default NyTimesLogo;
