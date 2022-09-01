import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowArcLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.512 18.512h-8v-8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 23a12 12 0 0 0-20.488-8.488l-4 4"
    />
  </svg>
);

export default SvgArrowArcLeft;
