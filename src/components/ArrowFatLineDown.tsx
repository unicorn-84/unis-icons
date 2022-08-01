import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 17 12 12 12-12h-6V9H10v8H4ZM22 5H10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowFatLineDown;
