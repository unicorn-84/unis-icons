import * as React from 'react';
import { SVGProps } from 'react';

const AlignCenterHorizontalSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 11H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1ZM16 6v5m0 10v5"
    />
  </svg>
);

export default AlignCenterHorizontalSimple;
