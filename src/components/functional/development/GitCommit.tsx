import * as React from 'react';
import { SVGProps } from 'react';

const GitCommit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM1 16h8.5m13 0H31"
    />
  </svg>
);

export default GitCommit;
