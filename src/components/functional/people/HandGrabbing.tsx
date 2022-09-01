import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandGrabbing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 11.5a2.5 2.5 0 0 0-5 0v3m10-1v-2a2.5 2.5 0 0 0-5 0v4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 18.5v-4H8.5A2.512 2.512 0 0 0 6 17v2a10 10 0 0 0 20 0v-5.5a2.5 2.5 0 0 0-5 0v2"
    />
  </svg>
);

export default SvgHandGrabbing;
