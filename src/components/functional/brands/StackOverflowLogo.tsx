import * as React from 'react';
import { SVGProps } from 'react';

const StackOverflowLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 19v8h20v-8m-15 3h10m-9.125-6.6 9.65 2.588M14.412 9.25l8.663 5m-4.6-10.275 7.063 7.062"
    />
  </svg>
);

export default StackOverflowLogo;
