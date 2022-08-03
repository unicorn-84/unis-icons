import * as React from 'react';
import { SVGProps } from 'react';

const BellSimpleSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22m-14 1h8M11.563 5.175A8.85 8.85 0 0 1 16.063 4c4.95.037 8.912 4.15 8.912 9.113V14c0 3.337.525 5.625 1.125 7.163M23.275 24H6.125a1 1 0 0 1-.863-1.512c.825-1.413 1.763-4.013 1.763-8.488v-1a9.05 9.05 0 0 1 1.587-5.125"
    />
  </svg>
);

export default BellSimpleSlash;
