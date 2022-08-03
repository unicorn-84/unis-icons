import * as React from 'react';
import { SVGProps } from 'react';

const LockKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 11H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1Zm-14.5 0V6.5a4.5 4.5 0 1 1 9 0V11"
    />
  </svg>
);

export default LockKey;
