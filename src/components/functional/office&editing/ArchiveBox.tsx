import * as React from 'react';
import { SVGProps } from 'react';

const ArchiveBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#archive-box_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 27H6a1 1 0 0 1-1-1V9l2-4h18l2 4v17a1 1 0 0 1-1 1Z" />
      <path d="M11.762 18.762 16 23l4.238-4.238M16 13v10M5 9h22" />
    </g>
    <defs>
      <clipPath id="archive-box_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ArchiveBox;
