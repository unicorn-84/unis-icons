import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 9 13 23l-7-7"
    />
  </svg>
);

export default SvgCheck;
