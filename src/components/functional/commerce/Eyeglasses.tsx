import * as React from 'react';
import { SVGProps } from 'react';

const SvgEyeglasses = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#eyeglasses_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M8.5 25a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm15 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 20h6" />
      <path d="M4 20.5V9a2.987 2.987 0 0 1 3-3m18 0a2.988 2.988 0 0 1 3 3v11.5" />
    </g>
    <defs>
      <clipPath id="eyeglasses_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEyeglasses;
