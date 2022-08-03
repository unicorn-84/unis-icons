import * as React from 'react';
import { SVGProps } from 'react';

const Lightbulb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 29h10M9.838 20.875A9.937 9.937 0 0 1 6 13.062C5.975 7.637 10.338 3.125 15.763 3a10 10 0 0 1 6.412 17.862A3.024 3.024 0 0 0 21 23.25V24a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-.75a3.049 3.049 0 0 0-1.162-2.375v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.013 7.1a5.988 5.988 0 0 1 4.9 4.888"
    />
  </svg>
);

export default Lightbulb;
