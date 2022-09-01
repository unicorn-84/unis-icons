import * as React from 'react';
import { SVGProps } from 'react';

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 8 9 8-9 8m10 0h12"
    />
  </svg>
);

export default SvgTerminal;
