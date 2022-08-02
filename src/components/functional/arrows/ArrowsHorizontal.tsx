import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 12-4 4 4 4m18-8 4 4-4 4M3 16h26"
    />
  </svg>
);

export default ArrowsHorizontal;
