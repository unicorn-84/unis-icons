import * as React from 'react';
import { SVGProps } from 'react';

const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 22V8a2.986 2.986 0 0 0-3-3H5m8 8h8m-8 4h8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.763 10A3 3 0 1 1 8 8v16a3 3 0 1 0 5.238-2h14A3 3 0 0 1 25 27H11"
    />
  </svg>
);

export default SvgScroll;
