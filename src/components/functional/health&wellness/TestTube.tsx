import * as React from 'react';
import { SVGProps } from 'react';

const SvgTestTube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#test-tube_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 12.5 11.75 26.75a4.589 4.589 0 0 1-6.5 0v0a4.587 4.587 0 0 1 0-6.5L21.5 4l7.5 7.5-3 1Z" />
      <path d="M8.5 17s2.5-2 6.5 0 6.5 0 6.5 0" />
    </g>
    <defs>
      <clipPath id="test-tube_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTestTube;
