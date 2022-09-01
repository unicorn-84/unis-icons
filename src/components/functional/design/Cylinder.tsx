import * as React from 'react';
import { SVGProps } from 'react';

const SvgCylinder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 11.5c4.418 0 8-1.903 8-4.25S20.418 3 16 3 8 4.903 8 7.25s3.582 4.25 8 4.25Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7.25v17.5C8 27.1 11.588 29 16 29c4.413 0 8-1.9 8-4.25V7.25"
    />
  </svg>
);

export default SvgCylinder;
