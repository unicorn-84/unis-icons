import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandbag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#handbag_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26.1 9H5.9a1.013 1.013 0 0 0-1 .887l-1.775 16A1 1 0 0 0 4.112 27h23.775a1 1 0 0 0 .988-1.113l-1.775-16a1.012 1.012 0 0 0-1-.887v0Z" />
      <path d="M11 13V9a5 5 0 0 1 10 0v4" />
    </g>
    <defs>
      <clipPath id="handbag_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHandbag;
