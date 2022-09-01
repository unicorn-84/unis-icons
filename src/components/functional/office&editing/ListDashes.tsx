import * as React from 'react';
import { SVGProps } from 'react';

const SvgListDashes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#list-dashes_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8h15m-15 8h15m-15 8h15M5 8h2m-2 8h2m-2 8h2"
      />
    </g>
    <defs>
      <clipPath id="list-dashes_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgListDashes;
