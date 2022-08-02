import * as React from 'react';
import { SVGProps } from 'react';

const ArrowBendLeftDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19 22-6 6-6-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25 4a12 12 0 0 0-12 12v12"
    />
  </svg>
);

export default ArrowBendLeftDown;
