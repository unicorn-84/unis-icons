import * as React from 'react';
import { SVGProps } from 'react';

const Flask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#flask_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M13 4v7.725a1.05 1.05 0 0 1-.137.513l-7.95 13.25A1 1 0 0 0 5.762 27h20.475a1 1 0 0 0 .85-1.512l-7.95-13.25a1.05 1.05 0 0 1-.138-.513V4M11 4h10" />
      <path d="M7.825 20.625C9.3 19.538 11.838 18.925 16 21c4.462 2.238 7.063 1.35 8.488.137" />
    </g>
    <defs>
      <clipPath id="flask_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Flask;
