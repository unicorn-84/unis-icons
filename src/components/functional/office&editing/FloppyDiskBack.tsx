import * as React from 'react';
import { SVGProps } from 'react';

const FloppyDiskBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#floppy-disk-back_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M5 11.412V26a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H11.412a.987.987 0 0 0-.7.288l-5.424 5.425a.988.988 0 0 0-.288.7v0Z" />
      <path d="M16 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-4-12h8V5" />
    </g>
    <defs>
      <clipPath id="floppy-disk-back_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FloppyDiskBack;
