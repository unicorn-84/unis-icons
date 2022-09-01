import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserCirclePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.975 24.925a9.001 9.001 0 0 1 16.05 0M22 7h6m-3-3v6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.85 14.113a12 12 0 1 1-9.963-9.962"
    />
  </svg>
);

export default SvgUserCirclePlus;
