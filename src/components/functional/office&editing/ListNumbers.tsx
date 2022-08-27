import * as React from 'react';
import { SVGProps } from 'react';

const ListNumbers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#list-numbers_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h14M13 8h14M13 24h14M5 7.5l2-1v7m-1.862 5.575a1.75 1.75 0 1 1 3.062 1.65L5 25h3.5"
      />
    </g>
    <defs>
      <clipPath id="list-numbers_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ListNumbers;
