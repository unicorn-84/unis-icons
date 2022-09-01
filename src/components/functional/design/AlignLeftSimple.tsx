import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignLeftSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7v18m24-14H9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgAlignLeftSimple;
