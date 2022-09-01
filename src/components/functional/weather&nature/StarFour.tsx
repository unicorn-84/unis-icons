import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarFour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#star-four_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.837 20.438-2.9 7.975a1 1 0 0 1-1.875 0l-2.9-7.976a1.011 1.011 0 0 0-.6-.6l-7.974-2.9a1 1 0 0 1 0-1.875l7.974-2.9a1.011 1.011 0 0 0 .6-.6l2.9-7.974a1 1 0 0 1 1.876 0l2.9 7.974a1.011 1.011 0 0 0 .6.6l7.975 2.9a1 1 0 0 1 0 1.876l-7.976 2.9a1.011 1.011 0 0 0-.6.6v0Z"
      />
    </g>
    <defs>
      <clipPath id="star-four_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStarFour;
