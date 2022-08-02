import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLineUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 21 24 7m0 12.5V7H11.5M5 27h22"
    />
  </svg>
);

export default ArrowLineUpRight;
