import * as React from 'react';
import { SVGProps } from 'react';

const FolderUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-user_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M23.5 24.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.625 27.5a4 4 0 0 1 7.75 0M4 10V7a1 1 0 0 1 1-1h6.588a.987.987 0 0 1 .7.288L16 10" />
      <path d="M15.075 26H4.925A.925.925 0 0 1 4 25.075V10h23a1 1 0 0 1 1 1v4" />
    </g>
    <defs>
      <clipPath id="folder-user_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderUser;
