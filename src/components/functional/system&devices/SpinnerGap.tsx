import * as React from 'react';
import { SVGProps } from 'react';

const SpinnerGap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4v4m12 8h-4m.488 8.488-2.825-2.825M16 28v-4m-8.487.488 2.825-2.825M4 16h4m-.487-8.488 2.825 2.826"
    />
  </svg>
);

export default SpinnerGap;
