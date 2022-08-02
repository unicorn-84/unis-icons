import * as React from 'react';
import { SVGProps } from 'react';

const AlignRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 5v22M10 14h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Zm12 4H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default AlignRight;
