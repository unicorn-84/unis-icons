import * as React from 'react';
import { SVGProps } from 'react';

const EyeSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22m-6.637-7.3A4.95 4.95 0 0 1 16 21a5 5 0 0 1-3.363-8.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.25 8.575C4.15 11.15 2 16 2 16s4 9 14 9a14.74 14.74 0 0 0 6.75-1.575m3.325-2.288C28.8 18.7 30 16 30 16s-4-9-14-9c-.867-.002-1.732.07-2.587.213"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.938 11.088a4.989 4.989 0 0 1 4.037 4.437"
    />
  </svg>
);

export default EyeSlash;
