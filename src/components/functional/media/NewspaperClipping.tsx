import * as React from 'react';
import { SVGProps } from 'react';

const NewspaperClipping = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#newspaper-clipping_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 27V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v20l-4-2-4 2-4-2-4 2-4-2-4 2Zm14-13h6m-6 4h6" />
      <path d="M14 12H8v8h6v-8Z" />
    </g>
    <defs>
      <clipPath id="newspaper-clipping_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default NewspaperClipping;