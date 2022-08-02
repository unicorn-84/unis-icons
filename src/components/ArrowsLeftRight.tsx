import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 18 4 4-4 4M6 22h20m-16-8-4-4 4-4m16 4H6"
    />
  </svg>
);

export default ArrowsLeftRight;