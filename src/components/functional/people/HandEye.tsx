import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 8.5v-4a2.5 2.5 0 0 1 5 0V13m-5.675 7.45a1.025 1.025 0 0 0 0 1.1c.713 1.1 2.6 3.45 5.675 3.45 3.075 0 4.962-2.35 5.675-3.45a1.025 1.025 0 0 0 0-1.1C20.962 19.35 19.075 17 16 17c-3.075 0-4.963 2.35-5.675 3.45ZM16 6.5a2.5 2.5 0 0 1 5 0V14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 14.5V14a2.5 2.5 0 0 1 5 0v5a10 10 0 0 1-20 0V8.5a2.5 2.5 0 1 1 5 0V14"
    />
    <path
      fill="currentColor"
      d="M16 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgHandEye;
