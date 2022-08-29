import * as React from 'react';
import { SVGProps } from 'react';

const ShuffleAngular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#shuffle-angular_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 9h6.488a.975.975 0 0 1 .812.425l9.4 13.15a.974.974 0 0 0 .813.425H29M26 6l3 3-3 3" />
      <path d="m26 20 3 3-3 3m-7.538-13.437L20.7 9.425A.975.975 0 0 1 21.513 9H29M4 23h6.488a.975.975 0 0 0 .812-.425l2.237-3.137" />
    </g>
    <defs>
      <clipPath id="shuffle-angular_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ShuffleAngular;
