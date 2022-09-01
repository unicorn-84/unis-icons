import * as React from 'react';
import { SVGProps } from 'react';

const SvgFinnTheHuman = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 13H11a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8a3 3 0 1 1 6 0h14a3 3 0 0 1 6 0v10a8.012 8.012 0 0 1-8 8H11a8.012 8.012 0 0 1-8-8V8Z"
    />
    <path
      fill="currentColor"
      d="M11.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgFinnTheHuman;
