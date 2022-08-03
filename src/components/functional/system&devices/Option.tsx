import * as React from 'react';
import { SVGProps } from 'react';

const Option = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9h7.887a.988.988 0 0 1 .888.55l6.45 12.9a.987.987 0 0 0 .9.55H28M19 9h9"
    />
  </svg>
);

export default Option;
