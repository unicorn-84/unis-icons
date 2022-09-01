import * as React from 'react';
import { SVGProps } from 'react';

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.287 8.925 2.475-2.475a5.513 5.513 0 0 1 7.788 7.788l-3.538 3.525a5.487 5.487 0 0 1-7.775 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.713 23.075-2.475 2.475a5.513 5.513 0 0 1-7.788-7.787l3.538-3.525a5.488 5.488 0 0 1 7.775 0"
    />
  </svg>
);

export default SvgLink;
