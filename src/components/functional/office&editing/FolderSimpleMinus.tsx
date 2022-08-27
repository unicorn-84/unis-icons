import * as React from 'react';
import { SVGProps } from 'react';

const FolderSimpleMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#folder-simple-minus_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 18h6m9-7v14.113a.888.888 0 0 1-.887.887H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H27a1 1 0 0 1 1 1Z"
      />
    </g>
    <defs>
      <clipPath id="folder-simple-minus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderSimpleMinus;
