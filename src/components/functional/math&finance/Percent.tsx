import * as React from 'react';
import { SVGProps } from 'react';

const Percent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#percent_svg__a)" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M25 7 7 25" />
      <path
        strokeMiterlimit={10}
        d="M9.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm13 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </g>
    <defs>
      <clipPath id="percent_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Percent;
