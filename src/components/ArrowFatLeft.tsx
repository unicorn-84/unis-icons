import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4 3 16l12 12v-6h11a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H15V4Z"
    />
  </svg>
);

export default ArrowFatLeft;
