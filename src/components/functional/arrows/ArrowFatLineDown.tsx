import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLineDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 17 12 12 12-12h-6V9H10v8H4ZM22 5H10"
    />
  </svg>
);

export default SvgArrowFatLineDown;
