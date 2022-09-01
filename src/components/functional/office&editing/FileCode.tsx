import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-code_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 4v7h7m-7.5 5 3 3-3 3m-5-6-3 3 3 3" />
      <path d="M25 28a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18Z" />
    </g>
    <defs>
      <clipPath id="file-code_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileCode;
