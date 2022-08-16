import * as React from 'react';
import { SVGProps } from 'react';

const TiktokLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 13.25a11.988 11.988 0 0 0 7 2.25v-5a7 7 0 0 1-7-7h-5v16a3.5 3.5 0 1 1-5-3.163v-5.2A8.5 8.5 0 1 0 21 19.5v-6.25Z"
    />
  </svg>
);

export default TiktokLogo;
