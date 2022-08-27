import * as React from 'react';
import { SVGProps } from 'react';

const FilePng = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-png_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M5.5 25h2a2 2 0 1 0 0-4h-2v6m8 0v-6l4.5 6v-6m7.5 3.25H27v1.475A2.687 2.687 0 0 1 24.75 27C23.225 27 22 25.663 22 24s1.225-3 2.75-3c.54-.001 1.064.17 1.5.488M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-png_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FilePng;
