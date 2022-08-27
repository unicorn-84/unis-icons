import * as React from 'react';
import { SVGProps } from 'react';

const FloppyDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#floppy-disk_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M27 11.412V26a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14.587a.987.987 0 0 1 .7.288l5.425 5.425a.99.99 0 0 1 .288.7v0Z" />
      <path d="M10 27v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8M19 9h-7" />
    </g>
    <defs>
      <clipPath id="floppy-disk_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FloppyDisk;
