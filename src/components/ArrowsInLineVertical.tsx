import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsInLineVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 16H5M16 2v10m4-4-4 4-4-4m4 22V20m-4 4 4-4 4 4"
    />
  </svg>
);

export default ArrowsInLineVertical;
