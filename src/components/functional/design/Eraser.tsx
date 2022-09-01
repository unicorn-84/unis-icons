import * as React from 'react';
import { SVGProps } from 'react';

const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.438 12.438 8.487 8.487M27 26.975H9.012l-4.637-4.637a1.988 1.988 0 0 1 0-2.825L18.512 5.375a1.987 1.987 0 0 1 2.825 0L27 11.025a2.025 2.025 0 0 1 0 2.838L13.875 26.975"
    />
  </svg>
);

export default SvgEraser;
