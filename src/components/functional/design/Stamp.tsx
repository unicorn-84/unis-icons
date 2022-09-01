import * as React from 'react';
import { SVGProps } from 'react';

const SvgStamp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 28h22M14 17 11.775 6.625A3 3 0 0 1 14.712 3h2.575a3 3 0 0 1 2.938 3.625L18 17m8 0H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgStamp;
