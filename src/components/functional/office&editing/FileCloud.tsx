import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-cloud_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 4v7h7" />
      <path d="M22 28h3a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11" />
      <path d="M8.213 21H7.5a3.5 3.5 0 0 0 0 7h6A5.5 5.5 0 1 0 8 22.5" />
    </g>
    <defs>
      <clipPath id="file-cloud_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileCloud;
