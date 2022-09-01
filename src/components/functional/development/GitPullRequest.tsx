import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitPullRequest = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 0v8m15 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-7v-5.012a6.025 6.025 0 0 0-1.762-4.25L17 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 11V6h5"
    />
  </svg>
);

export default SvgGitPullRequest;
