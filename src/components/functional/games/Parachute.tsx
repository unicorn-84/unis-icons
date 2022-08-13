import * as React from 'react';
import { SVGProps } from 'react';

const Parachute = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 15a12 12 0 0 0-24 0h24Zm0 0-12 9-12-9m12 9v4m-2 0h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 24-5-9c0-9 5-12 5-12s5 3 5 12l-5 9Z"
    />
  </svg>
);

export default Parachute;
