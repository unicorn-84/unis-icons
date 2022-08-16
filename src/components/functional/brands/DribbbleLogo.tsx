import * as React from 'react';
import { SVGProps } from 'react';

const DribbbleLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.875 25.663A20.013 20.013 0 0 1 28 16.1m-4.5-9.462A19.975 19.975 0 0 1 8 14a20.649 20.649 0 0 1-3.763-.35"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.738 5.213a20.063 20.063 0 0 1 9.287 22.1"
    />
  </svg>
);

export default DribbbleLogo;
