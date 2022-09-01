import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrashSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#trash-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 7H5m6-4h10m4 4v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7"
      />
    </g>
    <defs>
      <clipPath id="trash-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTrashSimple;
