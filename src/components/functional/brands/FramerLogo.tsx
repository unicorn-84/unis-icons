import * as React from 'react';
import { SVGProps } from 'react';

const FramerLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 12.5V21l9 8.5V21h9L7 4h18v8.5H7Z"
    />
  </svg>
);

export default FramerLogo;
