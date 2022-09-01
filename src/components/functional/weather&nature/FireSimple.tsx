import * as React from 'react';
import { SVGProps } from 'react';

const SvgFireSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#fire-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.988 8.175c-1.925 2.9-3.5 6.225-3.5 9.325a10.5 10.5 0 1 0 21 0c0-6.5-4.5-11.5-8.15-15.137l-4.35 9.137-5-3.325Z"
      />
    </g>
    <defs>
      <clipPath id="fire-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFireSimple;
