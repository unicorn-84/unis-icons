import * as React from 'react';
import { SVGProps } from 'react';

const MouseSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 4h-5a7 7 0 0 0-7 7v10a7 7 0 0 0 7 7h5a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7ZM16 14V9"
    />
  </svg>
);

export default MouseSimple;
