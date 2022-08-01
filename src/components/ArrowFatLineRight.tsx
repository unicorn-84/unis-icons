import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatLineRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17 4 12 12-12 12v-6H9V10h8V4ZM5 22V10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowFatLineRight;
