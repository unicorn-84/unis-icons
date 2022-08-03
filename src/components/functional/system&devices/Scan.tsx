import * as React from 'react';
import { SVGProps } from 'react';

const Scan = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 5h5v5M10 27H5v-5m22 0v5h-5M5 10V5h5m11 5H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default Scan;
