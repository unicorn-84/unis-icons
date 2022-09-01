import * as React from 'react';
import { SVGProps } from 'react';

const SvgSparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sparkle_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.337 21.938-2.4 6.512a1 1 0 0 1-1.874 0l-2.4-6.512a1.013 1.013 0 0 0-.6-.6l-6.513-2.4a1 1 0 0 1 0-1.875l6.512-2.4a1.011 1.011 0 0 0 .6-.6l2.4-6.513a1 1 0 0 1 1.876 0l2.4 6.513a1.011 1.011 0 0 0 .6.6l6.512 2.4a1 1 0 0 1 0 1.875l-6.512 2.4a1.011 1.011 0 0 0-.6.6v0ZM22 2v6m3-3h-6m9 4v4m2-2h-4"
      />
    </g>
    <defs>
      <clipPath id="sparkle_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSparkle;
