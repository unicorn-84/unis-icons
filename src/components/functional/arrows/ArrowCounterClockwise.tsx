import * as React from 'react';
import { SVGProps } from 'react';

const ArrowCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.975 12.463h-6v-6"
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

export default ArrowCounterClockwise;
