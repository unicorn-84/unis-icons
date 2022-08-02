import * as React from 'react';
import { SVGProps } from 'react';

const SelectionPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 6h-3m0 20h3m5-20H25a1 1 0 0 1 1 1v2.5m0 8v-3m-20 0v3M9.5 26H7a1 1 0 0 1-1-1v-2.5M9.5 6H7a1 1 0 0 0-1 1v2.5m20 13v7m3.5-3.5h-7"
    />
  </svg>
);

export default SelectionPlus;
