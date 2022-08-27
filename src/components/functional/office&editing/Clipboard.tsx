import * as React from 'react';
import { SVGProps } from 'react';

const Clipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#clipboard_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M20 5h5a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      <path d="M11 9V8a5 5 0 0 1 10 0v1H11Z" />
    </g>
    <defs>
      <clipPath id="clipboard_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Clipboard;
