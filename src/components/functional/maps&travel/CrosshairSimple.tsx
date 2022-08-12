import * as React from 'react';
import { SVGProps } from 'react';

const CrosshairSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 27.5c6.351 0 11.5-5.149 11.5-11.5S22.351 4.5 16 4.5 4.5 9.649 4.5 16 9.649 27.5 16 27.5Zm0-23v5M4.5 16h5M16 27.5v-5M27.5 16h-5"
    />
  </svg>
);

export default CrosshairSimple;
