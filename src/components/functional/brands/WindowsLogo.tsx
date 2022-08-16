import * as React from 'react';
import { SVGProps } from 'react';

const WindowsLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m27 27-10-1.813V18h10v9Zm-14-2.55L5 23v-5h8v6.45ZM27 5 17 6.813V14h10V5ZM13 7.55 5 9v5h8V7.55Z"
    />
  </svg>
);

export default WindowsLogo;
