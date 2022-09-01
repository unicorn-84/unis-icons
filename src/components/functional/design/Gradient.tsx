import * as React from 'react';
import { SVGProps } from 'react';

const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 13h10m4 0h10M4 18h5.5m13 0H28m-15 0h6M4 23h3m4 0h3m4 0h3m4 0h3M4 8h24"
    />
  </svg>
);

export default SvgGradient;
