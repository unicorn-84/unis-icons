import * as React from 'react';
import { SVGProps } from 'react';

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#bookmark_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m24 28-8-5-8 5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v22Z" />
      <path d="m24 22-8-5-8 5" />
    </g>
    <defs>
      <clipPath id="bookmark_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Bookmark;
