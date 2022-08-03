import * as React from 'react';
import { SVGProps } from 'react';

const UploadSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 10.25 16 5l5.25 5.25M16 19V5m11 14v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7"
    />
  </svg>
);

export default UploadSimple;
