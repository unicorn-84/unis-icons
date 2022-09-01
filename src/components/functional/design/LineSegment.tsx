import * as React from 'react';
import { SVGProps } from 'react';

const SvgLineSegment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-2.125-.875-11.75 11.75"
    />
  </svg>
);

export default SvgLineSegment;
