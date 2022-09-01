import * as React from 'react';
import { SVGProps } from 'react';

const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11v5h5M11 8.512l.85-4.687A1 1 0 0 1 12.838 3h6.325a1 1 0 0 1 .987.825L21 8.512M11 23.488l.85 4.687a1 1 0 0 0 .988.825h6.325a1 1 0 0 0 .987-.825l.85-4.688"
    />
  </svg>
);

export default SvgWatch;
