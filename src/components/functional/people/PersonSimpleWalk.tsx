import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonSimpleWalk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 16s7-7 11-3.3c2.238 2.063 4 5.3 9 5.3m-9.687-5.825L9 29m10 0v-7l-5.313-3.788"
    />
  </svg>
);

export default SvgPersonSimpleWalk;
