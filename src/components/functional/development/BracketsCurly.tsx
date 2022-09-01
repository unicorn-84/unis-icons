import * as React from 'react';
import { SVGProps } from 'react';

const SvgBracketsCurly = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5c-8 0 0 11-8 11 8 0 0 11 8 11M22 5c8 0 0 11 8 11-8 0 0 11-8 11"
    />
  </svg>
);

export default SvgBracketsCurly;
