import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelectionForeground = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 27H6a1 1 0 0 1-1-1v-1m9-14h-3m3 16h-2m9-6v-3M5 20v-2m14 9h1a1 1 0 0 0 1-1v-1m-2-14h1a1 1 0 0 1 1 1v1M7 11H6a1 1 0 0 0-1 1v1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H12a1 1 0 0 0-1 1v5"
    />
  </svg>
);

export default SvgSelectionForeground;
