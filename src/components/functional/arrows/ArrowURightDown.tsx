import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowURightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 22 6 6 6-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 22V11a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v17"
    />
  </svg>
);

export default SvgArrowURightDown;
