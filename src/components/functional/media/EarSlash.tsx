import * as React from 'react';
import { SVGProps } from 'react';

const EarSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#ear-slash_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m6 5 20 22M11.425 10.975A4.938 4.938 0 0 0 11 13m-.125-8.587A10 10 0 0 1 26 13" />
      <path d="M20.238 27a5.5 5.5 0 0 1-9.738-3.5C10.5 18.312 6 20 6 13a9.988 9.988 0 0 1 1.912-5.888m12.475 7.763A3 3 0 0 0 21 13a4.988 4.988 0 0 0-6.625-4.725m6.488 13.075A2.514 2.514 0 0 1 17.5 19a3.186 3.186 0 0 1 .2-1.137" />
    </g>
    <defs>
      <clipPath id="ear-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default EarSlash;
