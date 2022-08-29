import * as React from 'react';
import { SVGProps } from 'react';

const Record = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#record_svg__a)"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
      <path d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    </g>
    <defs>
      <clipPath id="record_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Record;
