import * as React from 'react';
import { SVGProps } from 'react';

const BracketsSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5H5v22h5M22 5h5v22h-5"
    />
  </svg>
);

export default BracketsSquare;
