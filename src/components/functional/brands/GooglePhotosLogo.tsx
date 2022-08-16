import * as React from 'react';
import { SVGProps } from 'react';

const GooglePhotosLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 16.5V3A7.5 7.5 0 0 1 21 16.5m-4.5-1H3A7.5 7.5 0 0 1 16.5 11m-1 4.5V29A7.5 7.5 0 0 1 11 15.5m4.5 1H29A7.5 7.5 0 0 1 15.5 21"
    />
  </svg>
);

export default GooglePhotosLogo;
