import * as React from 'react';
import { SVGProps } from 'react';

const SvgVault = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 25v3M8 25v3M27 6H5a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
    />
    <path fill="currentColor" d="M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 16h9m-9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);

export default SvgVault;
