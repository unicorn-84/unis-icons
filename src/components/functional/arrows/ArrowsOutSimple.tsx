import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsOutSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6h6v6m-7 1 7-7M12 26H6v-6m7-1-7 7"
    />
  </svg>
);

export default SvgArrowsOutSimple;
