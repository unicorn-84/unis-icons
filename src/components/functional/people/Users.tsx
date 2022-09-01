import * as React from 'react';
import { SVGProps } from 'react';

const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M11 20a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.425 7.237A6.812 6.812 0 0 1 21.187 7a6.5 6.5 0 0 1 0 13M2 24.675a11 11 0 0 1 18 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.188 20a10.987 10.987 0 0 1 9 4.675"
    />
  </svg>
);

export default SvgUsers;
