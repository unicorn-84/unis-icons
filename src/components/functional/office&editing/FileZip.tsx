import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileZip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-zip_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7m-5 14h2a2 2 0 0 0 0-4h-2v6m-5-6v6m-9-6h4l-4 6h4" />
    </g>
    <defs>
      <clipPath id="file-zip_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileZip;
