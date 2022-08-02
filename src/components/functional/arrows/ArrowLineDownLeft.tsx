import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLineDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 11 8 25m0-12.5V25h12.5M27 5H5"
    />
  </svg>
);

export default ArrowLineDownLeft;
