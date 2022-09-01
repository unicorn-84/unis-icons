import * as React from 'react';
import { SVGProps } from 'react';

const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25.138 15.912 28 20.85m-8.725-2.187.887 5.037m-7.449-5.05-.888 5.05M6.85 15.912l-2.863 4.963M4 13.113C6.1 15.713 9.95 19 16 19s9.9-3.287 12-5.887"
    />
  </svg>
);

export default SvgEyeClosed;
