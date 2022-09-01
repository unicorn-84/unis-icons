import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinkSimpleHorizontalBreak = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 22H8a6 6 0 1 1 0-12h5m6 12h5a6 6 0 1 0 0-12h-5"
    />
  </svg>
);

export default SvgLinkSimpleHorizontalBreak;
