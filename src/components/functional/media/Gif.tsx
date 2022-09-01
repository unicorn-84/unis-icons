import * as React from 'react';
import { SVGProps } from 'react';

const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#gif_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 9v14M28.5 9h-6v14m4.5-7h-4.5M9 16h3v3a4 4 0 1 1-8 0v-6a4 4 0 0 1 7.875-1"
      />
    </g>
    <defs>
      <clipPath id="gif_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGif;
