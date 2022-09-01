import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandSoap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#hand-soap_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 13h12a4 4 0 0 1 4 4v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V17a4 4 0 0 1 4-4v0Zm0 0v-2a2.987 2.987 0 0 1 3-3h6a2.987 2.987 0 0 1 3 3v2m1-8a2 2 0 0 0-2-2h-8m3 0v5"
      />
    </g>
    <defs>
      <clipPath id="hand-soap_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHandSoap;
