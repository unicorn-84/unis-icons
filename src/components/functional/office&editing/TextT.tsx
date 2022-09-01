import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextT = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#text-t_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7v18M6 11V7h20v4M12 25h8"
      />
    </g>
    <defs>
      <clipPath id="text-t_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextT;
