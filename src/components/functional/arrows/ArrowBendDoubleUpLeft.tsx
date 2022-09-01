import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBendDoubleUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 19-6-6 6-6m6 12-6-6 6-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 25a12 12 0 0 0-12-12h-6"
    />
  </svg>
);

export default SvgArrowBendDoubleUpLeft;
