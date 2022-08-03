import * as React from 'react';
import { SVGProps } from 'react';

const BellRinging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.025 14a8.975 8.975 0 1 1 17.95 0v0c0 4.475.937 7.075 1.762 8.5a1 1 0 0 1-.862 1.5H6.125a1 1 0 0 1-.863-1.5c.825-1.425 1.763-4.025 1.763-8.5ZM12 24v1a4 4 0 1 0 8 0v-1m2.925-21a13.125 13.125 0 0 1 4.75 5.262m-23.35 0A13.125 13.125 0 0 1 9.075 3"
    />
  </svg>
);

export default BellRinging;
