import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeartStraight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.712 26.488 10.125-10.125c2.488-2.5 2.85-6.588.5-9.2A6.5 6.5 0 0 0 17.9 6.9L16 8.812l-1.637-1.65c-2.5-2.487-6.588-2.85-9.2-.5A6.5 6.5 0 0 0 4.9 16.1l10.387 10.387a1.012 1.012 0 0 0 1.425 0v0Z"
    />
  </svg>
);

export default SvgHeartStraight;
