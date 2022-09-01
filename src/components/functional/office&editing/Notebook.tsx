import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#notebook_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 14h8m-8 4h8m4-13H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM10 5v22"
      />
    </g>
    <defs>
      <clipPath id="notebook_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNotebook;
