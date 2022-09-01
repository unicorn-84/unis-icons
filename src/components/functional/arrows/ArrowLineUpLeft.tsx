import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 21 8 7m0 12.5V7h12.5M27 27H5"
    />
  </svg>
);

export default SvgArrowLineUpLeft;
