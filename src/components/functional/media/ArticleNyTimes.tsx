import * as React from 'react';
import { SVGProps } from 'react';

const SvgArticleNyTimes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#article-ny-times_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M20 13h10m-10 4h10m-10 4h10M9 25h21m-14.187-8.55A6 6 0 1 1 9.988 9m-.001 5.313v6.675" />
      <path d="M13.988 6.5a2.5 2.5 0 0 1 0 5l-8-5a2.5 2.5 0 0 0-.776 4.875" />
    </g>
    <defs>
      <clipPath id="article-ny-times_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArticleNyTimes;
