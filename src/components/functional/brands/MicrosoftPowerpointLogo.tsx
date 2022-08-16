import * as React from 'react';
import { SVGProps } from 'react';

const MicrosoftPowerpointLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 23v5m0-24v5m2 7h10M18 9H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17h2a2 2 0 0 0 0-4h-2v6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.25 9a12 12 0 1 1 0 14"
    />
  </svg>
);

export default MicrosoftPowerpointLogo;
