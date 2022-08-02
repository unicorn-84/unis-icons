import * as React from 'react';
import { SVGProps } from 'react';

const MarkerCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 26.4V22a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v4.4m2-5.4v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3m-1.525-4-1.5-7.2c-.213-1.062-1.738-1.062-1.95 0l-1.5 7.2"
    />
  </svg>
);

export default MarkerCircle;
