import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagnetStraight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12h7m6 0h7m-13 6a3 3 0 0 0 6 0V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v10.875c0 5.512-4.413 10.087-9.925 10.125A10 10 0 0 1 6 18V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v11Z"
    />
  </svg>
);

export default SvgMagnetStraight;
