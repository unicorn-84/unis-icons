import * as React from 'react';
import { SVGProps } from 'react';

const Note = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#note_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 12h8m-8 4h8m-8 4h4m3.587 7H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v13.587a.987.987 0 0 1-.288.7l-6.424 6.425a.988.988 0 0 1-.7.288v0Z" />
      <path d="M26.913 20H20v6.913" />
    </g>
    <defs>
      <clipPath id="note_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Note;
