import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.025 12.463h6v-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.775 23.775a11 11 0 1 1 0-15.55l4.25 4.238"
    />
  </svg>
);

export default SvgArrowClockwise;
