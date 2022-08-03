import * as React from 'react';
import { SVGProps } from 'react';

const Notification = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 16v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10m8.5 5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </svg>
);

export default Notification;
