import * as React from 'react';
import { SVGProps } from 'react';

const ClockCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 10v6m5.2 3L16 16m-7.025-3.537h-5v-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.225 23.775a11 11 0 1 0 0-15.55l-4.25 4.238"
    />
  </svg>
);

export default ClockCounterClockwise;
