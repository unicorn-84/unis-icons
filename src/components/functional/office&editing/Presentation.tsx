import * as React from 'react';
import { SVGProps } from 'react';

const SvgPresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#presentation_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 6H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-7 17 4 5m-12-5-4 5m8-22V3"
      />
    </g>
    <defs>
      <clipPath id="presentation_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPresentation;
