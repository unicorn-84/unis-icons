import * as React from 'react';
import { SVGProps } from 'react';

const AppStoreLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.325 14.012 26 27M13 5l3 5.075M7.188 25 6 27M19 5 9.55 21m12.9 0H29M3 21h14.813"
    />
  </svg>
);

export default AppStoreLogo;
