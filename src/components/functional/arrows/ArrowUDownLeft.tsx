import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 15-6 6 6 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 7h11a7 7 0 0 1 7 7v0a7 7 0 0 1-7 7H4"
    />
  </svg>
);

export default SvgArrowUDownLeft;
