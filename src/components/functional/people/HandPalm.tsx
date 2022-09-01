import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandPalm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6.5a2.5 2.5 0 0 1 5 0V14M11 8.5v-4a2.5 2.5 0 0 1 5 0V13"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 21.5a5 5 0 0 1 5-5V14a2.5 2.5 0 0 1 5 0v5a10 10 0 0 1-20 0V8.5a2.5 2.5 0 1 1 5 0V14"
    />
  </svg>
);

export default SvgHandPalm;
