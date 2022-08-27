import * as React from 'react';
import { SVGProps } from 'react';

const FileRs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-rs_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M6 25h2a2 2 0 1 0 0-4H6v6m2.6-2.087L10 27m4-.5a3.15 3.15 0 0 0 1.875.625C17 27.125 18 26.75 18 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625" />
      <path d="M23 28h2a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-rs_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FileRs;
