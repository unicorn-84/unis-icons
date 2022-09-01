import * as React from 'react';
import { SVGProps } from 'react';

const SvgArchiveTray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#archive-tray_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <path d="M11.762 14.762 16 19l4.238-4.238M16 9v10M5 20h4.588a.99.99 0 0 1 .7.288l2.425 2.424a.988.988 0 0 0 .7.288h5.174a.987.987 0 0 0 .7-.288l2.425-2.424a.988.988 0 0 1 .7-.288H27" />
    </g>
    <defs>
      <clipPath id="archive-tray_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArchiveTray;
