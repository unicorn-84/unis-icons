import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareHalf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25.5 5.5h-19a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-19a1 1 0 0 0-1-1Zm-9.5 0v21M16 10h10.5M16 14h10.5M16 18h10.5M16 22h10.5"
    />
  </svg>
);

export default SvgSquareHalf;
