import * as React from 'react';
import { SVGProps } from 'react';

const WifiHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.612 20.762a6.337 6.337 0 0 1 8.775 0m-13.012-4.25a12.35 12.35 0 0 1 17.25 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.138 12.275a18.325 18.325 0 0 1 25.725 0"
    />
    <path
      fill="currentColor"
      d="M16 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default WifiHigh;
