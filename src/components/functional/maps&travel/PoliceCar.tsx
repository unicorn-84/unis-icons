import * as React from 'react';
import { SVGProps } from 'react';

const SvgPoliceCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 15h28m-2 8v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3M9 23v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3m4-4h2m12 0h2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m28 15-3.712-6.5a.988.988 0 0 0-.863-.5H8.575a.988.988 0 0 0-.862.5L4 15v8h24v-8ZM13 4h6"
    />
  </svg>
);

export default SvgPoliceCar;
