import * as React from 'react';
import { SVGProps } from 'react';

const SvgCardholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#cardholder_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 7H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
      <path d="M4 15h7.1a.987.987 0 0 1 .975.8 4.013 4.013 0 0 0 7.85 0 .987.987 0 0 1 .975-.8H28M4 11h24" />
    </g>
    <defs>
      <clipPath id="cardholder_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCardholder;
