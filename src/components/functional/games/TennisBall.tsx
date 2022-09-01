import * as React from 'react';
import { SVGProps } from 'react';

const SvgTennisBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.975 4A11.987 11.987 0 0 1 4 15.975m24 .05A11.987 11.987 0 0 0 16.025 28"
    />
  </svg>
);

export default SvgTennisBall;
