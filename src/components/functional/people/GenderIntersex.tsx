import * as React from 'react';
import { SVGProps } from 'react';

const SvgGenderIntersex = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 21a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 0v8m-4-3.5h8M21 3h5v5m-5.45.45L26 3"
    />
  </svg>
);

export default SvgGenderIntersex;
