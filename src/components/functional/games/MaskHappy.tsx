import * as React from 'react';
import { SVGProps } from 'react';

const SvgMaskHappy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.262 16a3 3 0 0 1 4.476 0M9.263 16a3 3 0 0 1 4.475 0m5.575 6a5.987 5.987 0 0 1-6.625 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27 6.038a.988.988 0 0 0-1.363-.925C23.75 5.838 20.113 7 16 7S8.25 5.838 6.363 5.113A.988.988 0 0 0 5 6.038V13c0 8.837 4.925 16 11 16s11-7.163 11-16V6.038Z"
    />
  </svg>
);

export default SvgMaskHappy;
