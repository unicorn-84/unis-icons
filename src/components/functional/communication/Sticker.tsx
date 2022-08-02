import * as React from 'react';
import { SVGProps } from 'react';

const Sticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 27h-6a6 6 0 0 1-6-6V11a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6c-1 3-7 9-10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 27v-4a6 6 0 0 1 6-6h4"
    />
  </svg>
);

export default Sticker;
