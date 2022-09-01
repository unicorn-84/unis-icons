import * as React from 'react';
import { SVGProps } from 'react';

const SvgYinYang = (props: SVGProps<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M16 23.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 28a6 6 0 1 1 0-12 6 6 0 1 0 0-12"
    />
    <path
      fill="currentColor"
      d="M16 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgYinYang;
