import * as React from 'react';
import { SVGProps } from 'react';

const SvgVolleyball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12ZM10 5.612 16 16m-6 10.387L16 16m12 0H16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.575 4.088A12.013 12.013 0 0 1 21.638 16m-15.25 7.2a12 12 0 0 1 6.8-12.075m13.85 9.6a12 12 0 0 1-13.85.15"
    />
  </svg>
);

export default SvgVolleyball;
