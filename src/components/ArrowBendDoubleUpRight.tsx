import * as React from 'react';
import { SVGProps } from 'react';

const ArrowBendDoubleUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 19 6-6-6-6m-6 12 6-6-6-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 25a12 12 0 0 1 12-12h6"
    />
  </svg>
);

export default ArrowBendDoubleUpRight;
