import * as React from 'react';
import { SVGProps } from 'react';

const SvgColumns = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 26V6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Zm11 0V6a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Z"
    />
  </svg>
);

export default SvgColumns;
