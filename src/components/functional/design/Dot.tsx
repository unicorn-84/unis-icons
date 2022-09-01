import * as React from 'react';
import { SVGProps } from 'react';

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.333 25.333a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
    />
  </svg>
);

export default SvgDot;
