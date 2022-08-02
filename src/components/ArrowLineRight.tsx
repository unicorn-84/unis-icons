import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLineRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 16h19m-9-9 9 9-9 9M27 5v22"
    />
  </svg>
);

export default ArrowLineRight;
