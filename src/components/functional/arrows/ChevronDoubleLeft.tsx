import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 26 15 16 25 6M15 26 5 16 15 6"
    />
  </svg>
);

export default SvgChevronDoubleLeft;
