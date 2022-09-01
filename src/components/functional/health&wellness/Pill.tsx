import * as React from 'react';
import { SVGProps } from 'react';

const SvgPill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#pill_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 5.994 6.006 17.99a5.66 5.66 0 0 0-.004 8.004 5.66 5.66 0 0 0 8.004-.004L26 13.994a5.66 5.66 0 0 0 .004-8.004A5.66 5.66 0 0 0 18 5.994ZM12 12l8 8m.012-5.988 3.05-2.95"
      />
    </g>
    <defs>
      <clipPath id="pill_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPill;
