import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlyingSaucer = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.1 23.587.487 2.95M16 24v4m-5.1-4.413-.488 2.95M22.125 8.6C26.788 9.575 30 11.625 30 14c0 3.313-6.262 6-14 6S2 17.312 2 14c0-2.375 3.237-4.438 7.925-5.4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12.488a1.975 1.975 0 0 0 1.55 1.937c1.789.4 3.617.593 5.45.575a23.925 23.925 0 0 0 5.45-.575A1.975 1.975 0 0 0 23 12.487V12a6.998 6.998 0 0 0-7.088-7C12.063 5.05 9 8.262 9 12.1v.388Z"
    />
  </svg>
);

export default SvgFlyingSaucer;
