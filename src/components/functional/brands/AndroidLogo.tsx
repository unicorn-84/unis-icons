import * as React from 'react';
import { SVGProps } from 'react';

const AndroidLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 24v-2.863C3 13.95 8.775 8.025 15.95 8A13 13 0 0 1 29 21v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1ZM4 7l3.888 3.887M28 7l-3.863 3.863"
    />
  </svg>
);

export default AndroidLogo;
