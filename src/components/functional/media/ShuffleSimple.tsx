import * as React from 'react';
import { SVGProps } from 'react';

const SvgShuffleSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#shuffle-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 6h5v5m0 10v5h-5M6 6l20 20m-7.175-12.825L26 6M6 26l7.175-7.175"
      />
    </g>
    <defs>
      <clipPath id="shuffle-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShuffleSimple;
