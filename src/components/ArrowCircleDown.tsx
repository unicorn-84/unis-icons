import * as React from 'react';
import { SVGProps } from 'react';

const ArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M11.762 16.762 16 21l4.238-4.238M16 11v10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowCircleDown;
