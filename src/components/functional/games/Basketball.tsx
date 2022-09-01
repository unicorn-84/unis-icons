import * as React from 'react';
import { SVGProps } from 'react';

const SvgBasketball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 7.525A11.987 11.987 0 0 1 11 16a11.987 11.987 0 0 1-3.5 8.475m17-16.95a12.013 12.013 0 0 0 0 16.95M4 16h24M16 4v24"
    />
  </svg>
);

export default SvgBasketball;
