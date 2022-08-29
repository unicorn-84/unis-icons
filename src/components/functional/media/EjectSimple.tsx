import * as React from 'react';
import { SVGProps } from 'react';

const EjectSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#eject-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.225 4.95-10.9 13.425A1 1 0 0 0 5.1 20h21.8a1 1 0 0 0 .775-1.625L16.775 4.95a1 1 0 0 0-1.55 0ZM28 26H4"
      />
    </g>
    <defs>
      <clipPath id="eject-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default EjectSimple;
