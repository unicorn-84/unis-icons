import * as React from 'react';
import { SVGProps } from 'react';

const Door = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 28h26M7 28V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v23"
    />
    <path
      fill="currentColor"
      d="M19.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default Door;
