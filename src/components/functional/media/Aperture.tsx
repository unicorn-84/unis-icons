import * as React from 'react';
import { SVGProps } from 'react';

const Aperture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#aperture_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-24 4.587 12.837M5.612 10l13.4 2.45M5.612 22l8.825-10.387M16 28l-4.588-12.838M26.387 22l-13.4-2.45m13.4-9.55-8.825 10.387"
      />
    </g>
    <defs>
      <clipPath id="aperture_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Aperture;
