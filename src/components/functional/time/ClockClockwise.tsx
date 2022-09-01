import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 10v6m5.2 3L16 16m7.025-3.537h5v-5"
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

export default SvgClockClockwise;
