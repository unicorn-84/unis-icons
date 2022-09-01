import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeadlights = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10h9m-9 12h9m-9-8h9m-9 4h9m-19 7a9 9 0 0 1-9-9.063C2.038 10.976 6.15 7 11.113 7H16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5Z"
    />
  </svg>
);

export default SvgHeadlights;
