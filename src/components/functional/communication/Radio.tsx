import * as React from 'react';
import { SVGProps } from 'react';

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 10h23a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10Zm0 0 20-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 14h4m-4 4h4m-4 4h4"
    />
  </svg>
);

export default SvgRadio;
