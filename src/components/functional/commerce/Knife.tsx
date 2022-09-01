import * as React from 'react';
import { SVGProps } from 'react';

const SvgKnife = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#knife_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.313 11.313 25 18s-9 12-22 9L24.738 4.738a2.492 2.492 0 1 1 3.524 3.524l-6.287 6.713"
      />
    </g>
    <defs>
      <clipPath id="knife_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgKnife;
