import * as React from 'react';
import { SVGProps } from 'react';

const PinterestLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 11-4 17m-3.313-8.425A10 10 0 1 1 26 14c0 5.525-4 9-8 9s-5.2-2.637-5.2-2.637"
    />
  </svg>
);

export default PinterestLogo;
