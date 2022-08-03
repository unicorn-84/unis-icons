import * as React from 'react';
import { SVGProps } from 'react';

const LinkSimpleBreak = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.125 22.363 14.588 25.9A6.002 6.002 0 1 1 6.1 17.413l3.538-3.538m12.725 4.25 3.537-3.537A6.001 6.001 0 1 0 17.413 6.1l-3.538 3.538"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.125 22.363 14.588 25.9A6.002 6.002 0 1 1 6.1 17.413l3.538-3.538m12.725 4.25 3.537-3.537A6.001 6.001 0 1 0 17.413 6.1l-3.538 3.538"
    />
  </svg>
);

export default LinkSimpleBreak;
