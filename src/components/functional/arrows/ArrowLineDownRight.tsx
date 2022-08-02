import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLineDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 11 14 14m0-12.5V25H11.5M5 5h22"
    />
  </svg>
);

export default ArrowLineDownRight;
