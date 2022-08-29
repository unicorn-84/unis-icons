import * as React from 'react';
import { SVGProps } from 'react';

const MusicNotesSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#music-notes-simple_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22.5 25a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-16 4a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M10 25.5V8l16-4v17.5" />
    </g>
    <defs>
      <clipPath id="music-notes-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default MusicNotesSimple;
