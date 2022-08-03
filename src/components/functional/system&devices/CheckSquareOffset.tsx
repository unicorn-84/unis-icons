import * as React from 'react';
import { SVGProps } from 'react';

const CheckSquareOffset = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 17.913V6.5a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1h-8.55"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 19-8 8-4-4"
    />
  </svg>
);

export default CheckSquareOffset;
