import * as React from 'react';
import { SVGProps } from 'react';

const DownloadSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 13.75 16 19l5.25-5.25M16 5v14m11 0v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7"
    />
  </svg>
);

export default DownloadSimple;
