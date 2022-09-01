import * as React from 'react';
import { SVGProps } from 'react';

const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5v22M6.475 10.5l19.05 11m-19.05 0 19.05-11"
    />
  </svg>
);

export default SvgAsterisk;
