import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15 16 3l12 12h-6v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V15H4Z"
    />
  </svg>
);

export default ArrowFatUp;
