import * as React from 'react';
import { SVGProps } from 'react';

const Wrench = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.362 8.875A7.987 7.987 0 0 1 16.137 19v0l-7.012 8.125a3.005 3.005 0 1 1-4.25-4.25L13 15.863A7.988 7.988 0 0 1 23.125 4.636l-5.25 5.238.712 3.537 3.538.713 5.237-5.25Z"
    />
  </svg>
);

export default Wrench;
