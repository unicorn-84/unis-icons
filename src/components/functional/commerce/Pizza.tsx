import * as React from 'react';
import { SVGProps } from 'react';

const SvgPizza = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#pizza_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M2.925 9.463a.988.988 0 0 1 .275-1.35 21.975 21.975 0 0 1 25.6 0 .987.987 0 0 1 .275 1.35L16.837 28.675a.988.988 0 0 1-1.675 0L2.925 9.463Z" />
      <path d="M4.588 12.075a18.013 18.013 0 0 1 22.825 0m-6.875 10.788a3.5 3.5 0 1 1 3.6-5.663m-16.901-.975A3.5 3.5 0 1 1 10.5 21h-.225" />
    </g>
    <defs>
      <clipPath id="pizza_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPizza;
