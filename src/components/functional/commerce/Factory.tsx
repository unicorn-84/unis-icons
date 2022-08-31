import * as React from 'react';
import { SVGProps } from 'react';

const Factory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#factory_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10 22h3.5m5 0H22m5 5V17h-6l-8-6v6l-8-6v16m-3 0h28" />
      <path d="M27 17 25.125 3.863A1 1 0 0 0 24.137 3h-2.274a1 1 0 0 0-.988.862L19.187 15.65" />
    </g>
    <defs>
      <clipPath id="factory_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Factory;
