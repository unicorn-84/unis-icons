import * as React from 'react';
import { SVGProps } from 'react';

const SvgStrategy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 9l5 5m0-5-5 5m17 7 5 5m0-5-5 5m-5-16V5h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 5 2 2c5 5 1 11-3 12"
    />
  </svg>
);

export default SvgStrategy;
