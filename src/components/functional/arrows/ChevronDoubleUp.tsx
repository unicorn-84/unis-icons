import * as React from 'react';
import { SVGProps } from 'react';

const ChevronDoubleUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 26 10-10 10 10M6 16 16 6l10 10"
    />
  </svg>
);

export default ChevronDoubleUp;
