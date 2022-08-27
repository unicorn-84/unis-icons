import * as React from 'react';
import { SVGProps } from 'react';

const FolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-open_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 26V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H25a1 1 0 0 1 1 1v3" />
      <path d="m4 26 3.775-11.313a1 1 0 0 1 .95-.687h19.888a1 1 0 0 1 .95 1.313L26 26H4Z" />
    </g>
    <defs>
      <clipPath id="folder-open_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderOpen;
