import * as React from 'react';
import { SVGProps } from 'react';

const Wine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#wine_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 22v7m-5 0h10M10 3h12l3.262 11.037a3.013 3.013 0 0 1-.15 2.088 10 10 0 0 1-18.225 0 3.012 3.012 0 0 1-.15-2.088L10 3Z" />
      <path d="M7.188 12.537c1.324-.712 4.4-1.737 8.812.463 4.7 2.35 7.887 1.025 9.05.338" />
    </g>
    <defs>
      <clipPath id="wine_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Wine;
