import * as React from 'react';
import { SVGProps } from 'react';

const InstagramLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5 4.5h-11a6 6 0 0 0-6 6v11a6 6 0 0 0 6 6h11a6 6 0 0 0 6-6v-11a6 6 0 0 0-6-6Z"
    />
    <path
      fill="currentColor"
      d="M22.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default InstagramLogo;
