import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderSimpleLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-simple-lock_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M14 26H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H27a1 1 0 0 1 1 1v2" />
      <path d="M28 20.5h-9V26h9v-5.5Zm-7 0V19a2.5 2.5 0 0 1 5 0v1.5" />
    </g>
    <defs>
      <clipPath id="folder-simple-lock_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderSimpleLock;
