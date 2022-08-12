import * as React from 'react';
import { SVGProps } from 'react';

const HouseLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 27V14.437a1.035 1.035 0 0 0-.325-.737l-10-9.087a1 1 0 0 0-1.35 0l-10 9.087a1.037 1.037 0 0 0-.325.738V27m-3 0h28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 27v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7"
    />
  </svg>
);

export default HouseLine;
