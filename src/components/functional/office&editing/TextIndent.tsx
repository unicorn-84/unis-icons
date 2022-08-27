import * as React from 'react';
import { SVGProps } from 'react';

const TextIndent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-indent_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 16h13M14 8h13M5 24h22M5 7l5 5-5 5"
      />
    </g>
    <defs>
      <clipPath id="text-indent_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TextIndent;
