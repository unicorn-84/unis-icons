import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#notepad_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16h8m-8 4h8M7 5h18a1 1 0 0 1 1 1v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a1 1 0 0 1 1-1v0Zm3-2v4m6-4v4m6-4v4"
      />
    </g>
    <defs>
      <clipPath id="notepad_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNotepad;
