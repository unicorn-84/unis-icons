import * as React from 'react';
import { SVGProps } from 'react';

const SvgPawPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#paw-print_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-21 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6-6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm2.4 9.488a5.45 5.45 0 0 1-2.575-3.25v0a4.5 4.5 0 0 0-8.65 0 5.45 5.45 0 0 1-2.575 3.25 4 4 0 0 0 3.463 7.2 8.975 8.975 0 0 1 6.874 0 4 4 0 0 0 3.462-7.2Z"
      />
    </g>
    <defs>
      <clipPath id="paw-print_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPawPrint;
