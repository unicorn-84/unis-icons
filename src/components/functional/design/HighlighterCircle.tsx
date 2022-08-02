import * as React from 'react';
import { SVGProps } from 'react';

const HighlighterCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 18v-6l6-3v9m2 8.913V19a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7.913"
    />
  </svg>
);

export default HighlighterCircle;
