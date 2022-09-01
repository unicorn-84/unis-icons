import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignCenterHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4v3m0 18v3m0-14v4m7-11H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm3 11H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgAlignCenterHorizontal;
