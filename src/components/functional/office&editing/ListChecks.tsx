import * as React from 'react';
import { SVGProps } from 'react';

const ListChecks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#list-checks_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 16h11M16 8h11M16 24h11M11.5 6l-4.338 4L5 8m6.5 6-4.338 4L5 16m6.5 6-4.338 4L5 24"
      />
    </g>
    <defs>
      <clipPath id="list-checks_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ListChecks;
