import * as React from 'react';
import { SVGProps } from 'react';

const Files = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#files_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M21 28H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10l5 5v14a1 1 0 0 1-1 1Z" />
      <path d="M10 8V5a1 1 0 0 1 1-1h10l5 5v14a1 1 0 0 1-1 1h-3m-11-5h6m-6 4h6" />
    </g>
    <defs>
      <clipPath id="files_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Files;
