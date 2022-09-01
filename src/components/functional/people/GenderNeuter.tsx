import * as React from 'react';
import { SVGProps } from 'react';

const SvgGenderNeuter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0v7"
    />
  </svg>
);

export default SvgGenderNeuter;
