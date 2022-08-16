import * as React from 'react';
import { SVGProps } from 'react';

const PhosphorLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.5 4 8.25 16.5m0-16.5H8.5v16.5h8.25V4Zm0 16.5v8.25A8.239 8.239 0 0 1 8.5 20.5m8.25 0h1a8.25 8.25 0 1 0 0-16.5h-1"
    />
  </svg>
);

export default PhosphorLogo;
