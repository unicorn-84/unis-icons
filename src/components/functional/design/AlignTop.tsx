import * as React from 'react';
import { SVGProps } from 'react';

const AlignTop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 5H5m20 17V10a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1ZM13 9H8a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default AlignTop;
