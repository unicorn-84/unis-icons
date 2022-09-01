import * as React from 'react';
import { SVGProps } from 'react';

const SvgShower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#shower_svg__a)">
      <path
        fill="currentColor"
        d="M7.5 30a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3.5-3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M31 5h-3.587a.987.987 0 0 0-.7.288L23 9 6.913 11.675a1 1 0 0 0-.538 1.7l12.25 12.25a1 1 0 0 0 1.7-.538L23 9"
      />
    </g>
    <defs>
      <clipPath id="shower_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShower;
