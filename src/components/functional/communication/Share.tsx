import * as React from 'react';
import { SVGProps } from 'react';

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 19 6-6-6-6m2 20H5a1 1 0 0 1-1-1V11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.375 22A12.013 12.013 0 0 1 21 13h7"
    />
  </svg>
);

export default SvgShare;
