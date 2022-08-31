import * as React from 'react';
import { SVGProps } from 'react';

const Backpack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#backpack_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 6h8a6 6 0 0 1 6 6v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V12a6 6 0 0 1 6-6v0Z" />
      <path d="M10 28v-9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9M12 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5h4m-8 10h12m-4 0v2" />
    </g>
    <defs>
      <clipPath id="backpack_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Backpack;
