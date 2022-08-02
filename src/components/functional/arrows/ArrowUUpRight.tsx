import * as React from 'react';
import { SVGProps } from 'react';

const ArrowUUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 17 6-6-6-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 25H11a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h17"
    />
  </svg>
);

export default ArrowUUpRight;
