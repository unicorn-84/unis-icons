import * as React from 'react';
import { SVGProps } from 'react';

const ChevronDoubleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 16 16 26 6 16M26 6 16 16 6 6"
    />
  </svg>
);

export default ChevronDoubleDown;
