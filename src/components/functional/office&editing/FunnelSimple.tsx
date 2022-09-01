import * as React from 'react';
import { SVGProps } from 'react';

const SvgFunnelSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#funnel-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16h16M3 10h26M13 22h6"
      />
    </g>
    <defs>
      <clipPath id="funnel-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFunnelSimple;
