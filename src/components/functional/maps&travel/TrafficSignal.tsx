import * as React from 'react';
import { SVGProps } from 'react';

const TrafficSignal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 4H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-15h3m-3 10h3M5 9h3M5 19h3"
    />
  </svg>
);

export default TrafficSignal;
