import * as React from 'react';
import { SVGProps } from 'react';

const GoogleChromeLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 20.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-9h11.125M12.1 18.25 6.538 8.612M19.9 18.25l-5.562 9.637"
    />
  </svg>
);

export default GoogleChromeLogo;
