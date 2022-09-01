import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifiSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22M13.388 7.188A17.974 17.974 0 0 1 16 7a18.2 18.2 0 0 1 12.863 5.275m-25.725 0A18.214 18.214 0 0 1 9.05 8.363m9.963 5.012a12.188 12.188 0 0 1 5.612 3.137m-17.25 0A12.338 12.338 0 0 1 13.5 13.25m-1.888 7.512a6.363 6.363 0 0 1 8.45-.3"
    />
    <path
      fill="currentColor"
      d="M16 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgWifiSlash;
