import * as React from 'react';
import { SVGProps } from 'react';

const AlignCenterVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 16h-3M7 16H4m14 0h-4m11 7V9a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1ZM13 5H8a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default AlignCenterVertical;
