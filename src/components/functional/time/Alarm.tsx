import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 9v7h7"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m24.488 3.275 4.237 4.238m-25.45 0 4.238-4.238"
    />
  </svg>
);

export default SvgAlarm;
