import * as React from 'react';
import { SVGProps } from 'react';

const MessengerLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.675 22.125a11.987 11.987 0 1 1 4.2 4.2v0L5.725 27.5A.988.988 0 0 1 4.5 26.275l1.175-4.15Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 18 4-4 4 4 4-4"
    />
  </svg>
);

export default MessengerLogo;
