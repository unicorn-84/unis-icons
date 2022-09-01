import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLineRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 4 12 12-12 12v-6H9V10h8V4ZM5 22V10"
    />
  </svg>
);

export default SvgArrowFatLineRight;
