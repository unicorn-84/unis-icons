import * as React from 'react';
import { SVGProps } from 'react';

const FolderSimpleUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-simple-user_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M23.5 24.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.625 27.5a4 4 0 0 1 7.75 0M15 26H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H27a1 1 0 0 1 1 1v4" />
    </g>
    <defs>
      <clipPath id="folder-simple-user_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderSimpleUser;
