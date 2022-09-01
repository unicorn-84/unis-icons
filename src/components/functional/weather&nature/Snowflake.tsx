import * as React from 'react';
import { SVGProps } from 'react';

const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#snowflake_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 8v16M13 5l3 3 3-3m-6 22 3-3 3 3M9.075 12l13.85 8m-17.95-6.9 4.1-1.1-1.1-4.1m16.05 16.2-1.1-4.1 4.1-1.1M9.075 20l13.85-8M7.975 24.1l1.1-4.1-4.1-1.1m22.05-5.8-4.1-1.1 1.1-4.1"
      />
    </g>
    <defs>
      <clipPath id="snowflake_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSnowflake;
