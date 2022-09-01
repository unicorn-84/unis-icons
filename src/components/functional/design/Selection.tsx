import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelection = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 5h-4m0 22h4m5-22h3a1 1 0 0 1 1 1v3m0 9v-4m-4 13h3a1 1 0 0 0 1-1v-3M5 14v4m4 9H6a1 1 0 0 1-1-1v-3M9 5H6a1 1 0 0 0-1 1v3"
    />
  </svg>
);

export default SvgSelection;
