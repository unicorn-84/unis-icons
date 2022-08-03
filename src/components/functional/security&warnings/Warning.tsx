import * as React from 'react';
import { SVGProps } from 'react';

const Warning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 13v5M14.275 5l-11 19A2 2 0 0 0 5 27h22a2 2 0 0 0 1.725-3l-11-19a1.988 1.988 0 0 0-3.45 0v0Z"
    />
    <path fill="currentColor" d="M16 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default Warning;
