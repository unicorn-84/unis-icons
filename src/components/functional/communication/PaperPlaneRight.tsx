import * as React from 'react';
import { SVGProps } from 'react';

const PaperPlaneRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.437 15.125 6.325 3.3A1 1 0 0 0 4.9 4.512l3.975 11.15a.9.9 0 0 1 0 .675L4.9 27.487A1 1 0 0 0 6.325 28.7l21.112-11.825a1 1 0 0 0 0-1.75v0ZM9 16h8"
    />
  </svg>
);

export default PaperPlaneRight;
