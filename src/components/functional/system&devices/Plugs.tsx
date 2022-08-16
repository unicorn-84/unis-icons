import * as React from 'react';
import { SVGProps } from 'react';

const Plugs = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.5 22.5-3.875 3.875a2.999 2.999 0 0 1-4.25 0l-2.75-2.75a3 3 0 0 1 0-4.25L9.5 15.5M7 25l-4 4M29 3l-4 4m-7 11-3 3m-1-7-3 3m11.5-.5 3.875-3.875a2.999 2.999 0 0 0 0-4.25l-2.75-2.75a3 3 0 0 0-4.25 0L15.5 9.5m-1-1 9 9m-15-3 9 9"
    />
  </svg>
);

export default Plugs;