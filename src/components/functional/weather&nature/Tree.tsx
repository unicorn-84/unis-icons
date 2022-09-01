import * as React from 'react';
import { SVGProps } from 'react';

const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tree_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 29V11m0 8-6-3m6 0 6-3m-5.437 9.65a8 8 0 1 0 7.774-13.912 1.075 1.075 0 0 1-.5-.525 8.5 8.5 0 0 0-15.675 0c-.1.227-.277.413-.5.525a8 8 0 1 0 7.776 13.912 1.025 1.025 0 0 1 1.124 0Z"
      />
    </g>
    <defs>
      <clipPath id="tree_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTree;
