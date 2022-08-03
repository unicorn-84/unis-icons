import * as React from 'react';
import { SVGProps } from 'react';

const CloudArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.763 21.762 19 26l4.238-4.238M19 16v10m-7 0H9a7 7 0 1 1 0-14c.586 0 1.17.071 1.738.213"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16a10 10 0 1 1 18 6"
    />
  </svg>
);

export default CloudArrowDown;
