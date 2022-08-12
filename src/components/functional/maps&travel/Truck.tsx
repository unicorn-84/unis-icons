import * as React from 'react';
import { SVGProps } from 'react';

const Truck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 10h5.325a.988.988 0 0 1 .925.625L30 15M2 18h20"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M23.5 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-15 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 24h-9m-6 0H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h19v13.4m0-6.4h8v8a1 1 0 0 1-1 1h-2.5"
    />
  </svg>
);

export default Truck;
