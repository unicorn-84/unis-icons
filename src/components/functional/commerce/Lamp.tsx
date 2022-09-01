import * as React from 'react';
import { SVGProps } from 'react';

const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#lamp_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.663 5h14.674a1.013 1.013 0 0 1 .925.6l5.138 12a1 1 0 0 1-.912 1.4H3.512a1 1 0 0 1-.913-1.4l5.138-12a1.012 1.012 0 0 1 .925-.6v0ZM16 19v8m-4 0h8m5-8v5"
      />
    </g>
    <defs>
      <clipPath id="lamp_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLamp;
