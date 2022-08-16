import * as React from 'react';
import { SVGProps } from 'react';

const AppleLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.262 4.063A4 4 0 0 1 21 1.5m6.313 18.863C25.738 24.213 22.887 27 20.5 27h-9c-3.5 0-8-6-8-12.5A7.5 7.5 0 0 1 16 8.912v0a7.5 7.5 0 0 1 10.9.95v0a6 6 0 0 0 .413 10.5v0Z"
    />
  </svg>
);

export default AppleLogo;
