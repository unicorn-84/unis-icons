import * as React from 'react';
import { SVGProps } from 'react';

const SvgHorse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 15a6 6 0 0 1-6 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 24.95A11.95 11.95 0 0 0 16.238 28c6.437-.125 11.675-5.387 11.762-11.825A12.001 12.001 0 0 0 16 4h-1v4L2 16l1.725 2.387a2.987 2.987 0 0 0 2.937 1.2C8.85 19.226 12.675 19 16 21l-4.4 6.163"
    />
    <path
      fill="currentColor"
      d="M15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgHorse;
