import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#bookmarks_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m21 28-7-5-7 5V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19Z" />
      <path d="M11 8V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19l-4-2.863" />
    </g>
    <defs>
      <clipPath id="bookmarks_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBookmarks;
