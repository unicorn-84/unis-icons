import * as React from 'react';
import { SVGProps } from 'react';

const AngularLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 29 10-5 2-15-12-5L4 9l2 15 10 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 20 16 11l-4.5 9m1.338-2.663h6.325"
    />
  </svg>
);

export default AngularLogo;
