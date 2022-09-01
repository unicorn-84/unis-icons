import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelectionBackground = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 11H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1Zm0-6h-2m7 0h1a1 1 0 0 1 1 1v1m0 7v-2m-2 9h1a1 1 0 0 0 1-1v-1M13 5h-1a1 1 0 0 0-1 1v1"
    />
  </svg>
);

export default SvgSelectionBackground;
