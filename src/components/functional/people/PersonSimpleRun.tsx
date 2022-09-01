import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonSimpleRun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 12.7s4-3.7 10 1c6.313 4.925 10 3 10 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.887 13.6C16.337 16.15 12.7 25.875 4 25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.825 20.15C16.063 20.625 22 22.5 22 29"
    />
  </svg>
);

export default SvgPersonSimpleRun;
