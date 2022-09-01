import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitDiff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-7v-5.012a6.025 6.025 0 0 0-1.762-4.25L18 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 11V6h5M7.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 0v5.012a6.025 6.025 0 0 0 1.762 4.25L14 26"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 21v5H9"
    />
  </svg>
);

export default SvgGitDiff;
