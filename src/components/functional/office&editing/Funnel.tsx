import * as React from 'react';
import { SVGProps } from 'react';

const Funnel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#funnel_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.263 6h21.475a1 1 0 0 1 .737 1.675l-8.213 9.037a.975.975 0 0 0-.262.675v7.075a.987.987 0 0 1-.45.838l-4 2.662a1 1 0 0 1-1.55-.825v-9.75a.975.975 0 0 0-.262-.675L4.525 7.675A1 1 0 0 1 5.262 6v0Z"
      />
    </g>
    <defs>
      <clipPath id="funnel_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Funnel;
