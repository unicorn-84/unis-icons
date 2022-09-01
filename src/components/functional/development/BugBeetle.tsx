import * as React from 'react';
import { SVGProps } from 'react';

const SvgBugBeetle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 13a9 9 0 1 0-18 0v6a9 9 0 1 0 18 0v-6Zm0 4h3M4 17h3m-3 4h3.225M4 13h24m-12 4v11m8.775-7H28M6.987 3.5l2.976 2.825M24.988 3.5l-2.963 2.813"
    />
  </svg>
);

export default SvgBugBeetle;
