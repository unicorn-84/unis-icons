import * as React from 'react';
import { SVGProps } from 'react';

const SketchLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 5h14l7 8-14 15L2 13l7-8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.137 13 16 28 9.863 13 16 5l6.137 8ZM2 13h28"
    />
  </svg>
);

export default SketchLogo;
