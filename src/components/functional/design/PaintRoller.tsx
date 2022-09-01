import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaintRoller = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 7H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 12h3a1 1 0 0 1 1 1v6.25a1.012 1.012 0 0 1-.725.962l-12.55 3.576a1.013 1.013 0 0 0-.725.962V29M5 12H2"
    />
  </svg>
);

export default SvgPaintRoller;
