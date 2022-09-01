import * as React from 'react';
import { SVGProps } from 'react';

const SvgHash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.45 12H28m-6-7-4 22M14 5l-4 22m-6-7h22.55"
    />
  </svg>
);

export default SvgHash;
