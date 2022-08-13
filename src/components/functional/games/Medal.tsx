import * as React from 'react';
import { SVGProps } from 'react';

const Medal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22c5.523 0 10-4.477 10-10S21.523 2 16 2 6 6.477 6 12s4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm6 2v10l-6-3-6 3V20"
    />
  </svg>
);

export default Medal;
