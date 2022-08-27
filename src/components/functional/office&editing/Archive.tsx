import * as React from 'react';
import { SVGProps } from 'react';

const Archive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#archive_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M28 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-1 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V12m8 5h6"
      />
    </g>
    <defs>
      <clipPath id="archive_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Archive;
