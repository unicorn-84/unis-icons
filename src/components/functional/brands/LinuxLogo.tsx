import * as React from 'react';
import { SVGProps } from 'react';

const LinuxLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 27s4-7 4-15a8 8 0 0 1 16 0c0 8 4 15 4 15"
    />
    <path
      fill="currentColor"
      d="M12.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 18-4 2-4-2m-1.2 9a6.012 6.012 0 0 1 10.4 0"
    />
  </svg>
);

export default LinuxLogo;
