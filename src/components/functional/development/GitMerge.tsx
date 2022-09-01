import * as React from 'react';
import { SVGProps } from 'react';

const SvgGitMerge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm15 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 18h-3.688a5.975 5.975 0 0 1-4.612-2.162L8.5 12v8"
    />
  </svg>
);

export default SvgGitMerge;
