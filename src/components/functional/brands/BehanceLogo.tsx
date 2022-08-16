import * as React from 'react';
import { SVGProps } from 'react';

const BehanceLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10h8m-9 9h10a4.987 4.987 0 1 0-1.462 3.538M4 15.5h8.25a4.25 4.25 0 0 1 0 8.5H4V8h6.75a3.75 3.75 0 0 1 0 7.5"
    />
  </svg>
);

export default BehanceLogo;
