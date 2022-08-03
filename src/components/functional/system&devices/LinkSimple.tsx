import * as React from 'react';
import { SVGProps } from 'react';

const LinkSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.763 20.238 8.475-8.488m-2.113 10.613L14.588 25.9A6.002 6.002 0 1 1 6.1 17.413l3.538-3.538m12.725 4.25 3.537-3.537A6.001 6.001 0 1 0 17.413 6.1l-3.538 3.538"
    />
  </svg>
);

export default LinkSimple;
