import * as React from 'react';
import { SVGProps } from 'react';

const ArrowFatLinesLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4 3 16l12 12v-6h4V10h-4V4Zm12 18V10m-4 12V10"
    />
  </svg>
);

export default ArrowFatLinesLeft;
