import * as React from 'react';
import { SVGProps } from 'react';

const SvgWheelchair = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.988 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v9h11l4 8 3-1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.975 20.5a7.999 7.999 0 1 1-7.988-8.5h7"
    />
  </svg>
);

export default SvgWheelchair;
