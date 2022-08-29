import * as React from 'react';
import { SVGProps } from 'react';

const CornersIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#corners-in_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26 12h-6V6M6 20h6v6m8 0v-6h6M12 6v6H6"
      />
    </g>
    <defs>
      <clipPath id="corners-in_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default CornersIn;
