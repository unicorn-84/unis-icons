import * as React from 'react';
import { SVGProps } from 'react';

const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#trash_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 7H5m8 6v8m6-8v8m6-14v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7m14 0V5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2"
      />
    </g>
    <defs>
      <clipPath id="trash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Trash;
