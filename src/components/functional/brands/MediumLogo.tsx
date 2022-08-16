import * as React from 'react';
import { SVGProps } from 'react';

const MediumLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 23.5c3.866 0 7-3.358 7-7.5 0-4.142-3.134-7.5-7-7.5S2 11.858 2 16c0 4.142 3.134 7.5 7 7.5Zm14-.5c1.657 0 3-3.134 3-7s-1.343-7-3-7-3 3.134-3 7 1.343 7 3 7Zm7-14v14"
    />
  </svg>
);

export default MediumLogo;
