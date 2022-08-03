import * as React from 'react';
import { SVGProps } from 'react';

const DeviceMobile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 3H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8 7h16M8 25h16"
    />
  </svg>
);

export default DeviceMobile;
