import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 16H5m9-9-9 9 9 9"
    />
  </svg>
);

export default ArrowLeft;
