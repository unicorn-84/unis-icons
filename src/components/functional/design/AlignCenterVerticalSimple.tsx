import * as React from 'react';
import { SVGProps } from 'react';

const AlignCenterVerticalSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 5h-8a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm6 11h-5m-10 0H6"
    />
  </svg>
);

export default AlignCenterVerticalSimple;
