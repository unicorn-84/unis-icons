import * as React from 'react';
import { SVGProps } from 'react';

const SvgUmbrellaSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#umbrella-simple_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22 25a3 3 0 0 1-6 0v-8" />
      <path d="M4.037 17a.987.987 0 0 1-.987-1.088 13 13 0 0 1 25.9 0A.988.988 0 0 1 27.962 17H4.038Z" />
    </g>
    <defs>
      <clipPath id="umbrella-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUmbrellaSimple;
