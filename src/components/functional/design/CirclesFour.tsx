import * as React from 'react';
import { SVGProps } from 'react';

const CirclesFour = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm13 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-13 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm13 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
  </svg>
);

export default CirclesFour;
