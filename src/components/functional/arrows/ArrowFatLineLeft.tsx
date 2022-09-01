import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLineLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4 3 16l12 12v-6h8V10h-8V4Zm12 18V10"
    />
  </svg>
);

export default SvgArrowFatLineLeft;
