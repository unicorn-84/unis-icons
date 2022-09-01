import * as React from 'react';
import { SVGProps } from 'react';

const SvgFunction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#function_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 16h14M7 27h3.662a4.013 4.013 0 0 0 3.938-3.288l2.8-15.425A4.013 4.013 0 0 1 21.338 5H25"
      />
    </g>
    <defs>
      <clipPath id="function_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFunction;
