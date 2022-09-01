import * as React from 'react';
import { SVGProps } from 'react';

const SvgClub = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.063 22.4A6 6 0 1 1 9.5 12.5c.471.002.94.057 1.4.162v0A5.912 5.912 0 0 1 10 9.5a6 6 0 1 1 12 0 5.912 5.912 0 0 1-.9 3.162v0c.46-.105.929-.16 1.4-.162a6 6 0 1 1-4.563 9.9L20 29h-8l2.063-6.6Z"
    />
  </svg>
);

export default SvgClub;
