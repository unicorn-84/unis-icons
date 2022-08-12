import * as React from 'react';
import { SVGProps } from 'react';

const UsersThree = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm8.5-8a7.475 7.475 0 0 1 6 3m-29 0a7.474 7.474 0 0 1 6-3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.8 27a8.013 8.013 0 0 1 14.4 0M7.5 14.5a3.999 3.999 0 1 1 3.925-4.75m9.15 0A4 4 0 1 1 24.5 14.5"
    />
  </svg>
);

export default UsersThree;
