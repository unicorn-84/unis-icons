import * as React from 'react';
import { SVGProps } from 'react';

const GoogleLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16h11a11.012 11.012 0 1 1-3.225-7.775"
    />
  </svg>
);

export default GoogleLogo;
