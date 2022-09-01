import * as React from 'react';
import { SVGProps } from 'react';

const SvgSkull = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 24.313a11.5 11.5 0 1 1 12 0V27a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2.688ZM14 28v-4m4 4v-4"
    />
  </svg>
);

export default SvgSkull;
