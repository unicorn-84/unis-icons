import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatLineLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4 3 16l12 12v-6h8V10h-8V4ZM27 22V10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowFatLineLeft;
