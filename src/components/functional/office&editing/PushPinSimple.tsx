import * as React from 'react';
import { SVGProps } from 'react';

const PushPinSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#push-pin-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 22v8M8 5h16M5 22h22M7 22l3-17m12 0 3 17"
      />
    </g>
    <defs>
      <clipPath id="push-pin-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default PushPinSimple;
