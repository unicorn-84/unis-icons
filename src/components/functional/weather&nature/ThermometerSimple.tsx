import * as React from 'react';
import { SVGProps } from 'react';

const SvgThermometerSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#thermometer-simple_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 18.375V6a4 4 0 1 1 8 0v12.375a6.5 6.5 0 1 1-8 0v0Z" />
      <path d="M16 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-5V11" />
    </g>
    <defs>
      <clipPath id="thermometer-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgThermometerSimple;
