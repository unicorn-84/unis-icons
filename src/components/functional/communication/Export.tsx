import * as React from 'react';
import { SVGProps } from 'react';

const SvgExport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 7.25 16 2l5.25 5.25M16 16V2m6 10h3a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h3"
    />
  </svg>
);

export default SvgExport;
