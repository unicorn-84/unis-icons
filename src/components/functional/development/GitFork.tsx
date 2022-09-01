import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitFork = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-15 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 0v1a2.987 2.987 0 0 0 3 3h9a2.986 2.986 0 0 0 3-3v-1M16 16v4"
    />
  </svg>
);

export default SvgGitFork;
