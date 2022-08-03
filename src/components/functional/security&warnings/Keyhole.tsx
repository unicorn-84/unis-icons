import * as React from 'react';
import { SVGProps } from 'react';

const Keyhole = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.675 16.575a3.5 3.5 0 1 0-3.35 0L12.6 20.6a.999.999 0 0 0 .912 1.4h4.976a1 1 0 0 0 .912-1.4l-1.725-4.025Z"
    />
  </svg>
);

export default Keyhole;
