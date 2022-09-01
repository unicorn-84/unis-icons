import * as React from 'react';
import { SVGProps } from 'react';

const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 22V9a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v13M3 22h26v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Zm15-11h-4"
    />
  </svg>
);

export default SvgLaptop;
