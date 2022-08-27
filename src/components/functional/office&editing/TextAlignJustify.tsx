import * as React from 'react';
import { SVGProps } from 'react';

const TextAlignJustify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-align-justify_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8.5h22m-22 5h22m-22 5h22m-22 5h22"
      />
    </g>
    <defs>
      <clipPath id="text-align-justify_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TextAlignJustify;
