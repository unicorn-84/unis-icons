import * as React from 'react';
import { SVGProps } from 'react';

const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 16l-6.612 4.525M29 7.788l-8.462 5.787M29 24.213 10.388 11.475"
    />
  </svg>
);

export default SvgScissors;
