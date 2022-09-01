import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrafficSign = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18 18 3-3-3-3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.295 2.211 2.214 15.293a1 1 0 0 0 0 1.414L15.3 29.793a1 1 0 0 0 1.414 0l13.081-13.081a1 1 0 0 0 0-1.415L16.71 2.211a1 1 0 0 0-1.414 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19v-1a2.986 2.986 0 0 1 3-3h7"
    />
  </svg>
);

export default SvgTrafficSign;
