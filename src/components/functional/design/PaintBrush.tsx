import * as React from 'react';
import { SVGProps } from 'react';

const PaintBrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 27h9A6.5 6.5 0 1 0 5 20.5C5 25 2.5 27 2.5 27Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.05 14.525c2.4-3.238 8.5-10.65 14.075-10.65 0 5.575-7.413 11.675-10.65 14.075"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.625 11.325a10.674 10.674 0 0 1 4.05 4.05"
    />
  </svg>
);

export default PaintBrush;
