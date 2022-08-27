import * as React from 'react';
import { SVGProps } from 'react';

const BookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#book-open_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11a4 4 0 0 1 4-4h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a4 4 0 0 0-4 4M3 24a1 1 0 0 0 1 1h8a4 4 0 0 1 4 4V11a4 4 0 0 0-4-4H4a1 1 0 0 0-1 1v16Z"
      />
    </g>
    <defs>
      <clipPath id="book-open_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default BookOpen;
