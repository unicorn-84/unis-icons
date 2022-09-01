import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 17h6m-3-3v6"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13.5 20a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.775 25a14 14 0 0 1 21.45 0"
    />
  </svg>
);

export default SvgUserPlus;
