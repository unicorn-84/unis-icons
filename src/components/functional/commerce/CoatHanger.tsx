import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoatHanger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#coat-hanger_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9a4 4 0 1 1 8 0L2.4 22.2A1 1 0 0 0 3 24h26a1 1 0 0 0 .6-1.8L16 12"
      />
    </g>
    <defs>
      <clipPath id="coat-hanger_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCoatHanger;
