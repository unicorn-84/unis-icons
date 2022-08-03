import * as React from 'react';
import { SVGProps } from 'react';

const ShieldSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.188 3 23.625 26m-4.375-4.812c-2.688 3.075-6.1 4.375-7.125 4.712a.9.9 0 0 1-.625 0C13.912 28.313 5 24.837 5 14.338V7a1 1 0 0 1 1-1h.912m5.401 0H26a1 1 0 0 1 1 1v7.338c0 2.512-.512 4.612-1.313 6.374"
    />
  </svg>
);

export default ShieldSlash;
