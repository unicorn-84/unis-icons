import * as React from 'react';
import { SVGProps } from 'react';

const GooglePlayLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.975 28.012a1 1 0 0 0 1.513.85L27.462 16.85a.963.963 0 0 0 0-1.7L6.488 3.137a1 1 0 0 0-1.513.85v24.025Zm.3-24.737 16.713 16.712M5.275 28.725l16.713-16.713"
    />
  </svg>
);

export default GooglePlayLogo;
