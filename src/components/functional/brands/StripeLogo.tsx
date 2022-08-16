import * as React from 'react';
import { SVGProps } from 'react';

const StripeLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.488 19c0 1.663 2.024 3 4.512 3 2.488 0 4.512-1.337 4.512-3 0-4-8.774-2.5-8.774-6 0-1.662 1.774-3 4.262-3 1.863 0 3.325.75 3.938 1.838"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default StripeLogo;
