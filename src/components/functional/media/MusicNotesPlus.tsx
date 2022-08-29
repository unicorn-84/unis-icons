import * as React from 'react';
import { SVGProps } from 'react';

const MusicNotesPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#music-notes-plus_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M25 4v6m3-3h-6m.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-16 4a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM26 14.9v6.6" />
      <path d="M10 25.5V8l7.063-1.762m2.824 5.287L10 14" />
    </g>
    <defs>
      <clipPath id="music-notes-plus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default MusicNotesPlus;
