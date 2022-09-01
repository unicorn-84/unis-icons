import * as React from 'react';
import { SVGProps } from 'react';

const SvgCat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cat_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 24v4"
      />
      <path
        fill="currentColor"
        d="M10.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6v5m2 11-2 2-2-2M12 6.625V11m8-4.375V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 17V6.412a1 1 0 0 1 1.713-.7L8.45 8.45A12.6 12.6 0 0 1 16 6a12.6 12.6 0 0 1 7.55 2.45v0l2.738-2.737a1 1 0 0 1 1.712.7V17c0 6.075-5.375 11-12 11S4 23.075 4 17Z"
      />
    </g>
    <defs>
      <clipPath id="cat_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCat;
