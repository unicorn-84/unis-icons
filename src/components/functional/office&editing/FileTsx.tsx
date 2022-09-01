import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileTsx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-tsx_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m21.5 21 4.5 6m0-6-4.5 6m-11-6H6m2.25 6v-6M14 26.5a3.15 3.15 0 0 0 1.875.625C17 27.125 18 26.75 18 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-tsx_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileTsx;
