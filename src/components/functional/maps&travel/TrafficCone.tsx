import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 27 7.762-22.325a1.025 1.025 0 0 1 .95-.675h2.576a1.025 1.025 0 0 1 .95.675L26 27m3 0H3m17.788-15h-9.575m12.35 8H8.438"
    />
  </svg>
);

export default SvgTrafficCone;
