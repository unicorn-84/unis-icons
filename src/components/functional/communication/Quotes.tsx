import * as React from 'react';
import { SVGProps } from 'react';

const Quotes = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 18H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v11a5 5 0 0 1-5 5M28 18h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1H27a1 1 0 0 1 1 1v11a5 5 0 0 1-5 5"
    />
  </svg>
);

export default Quotes;
