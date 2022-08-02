import * as React from 'react';
import { SVGProps } from 'react';

const ArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 8 16 16m-13 0h13V11"
    />
  </svg>
);

export default ArrowDownRight;
