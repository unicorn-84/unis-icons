import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsDownUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 22-4 4-4-4m4-16v20m8-16 4-4 4 4m-4 16V6"
    />
  </svg>
);

export default ArrowsDownUp;
