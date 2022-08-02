import * as React from 'react';
import { SVGProps } from 'react';

const ArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 24 8 8m13 0H8v13"
    />
  </svg>
);

export default ArrowUpLeft;
