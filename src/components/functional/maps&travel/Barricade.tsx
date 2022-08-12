import * as React from 'react';
import { SVGProps } from 'react';

const Barricade = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 9H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1ZM10.5 9l11 11m-2-11 9.5 9.5m-26-8 9.5 9.5M24 20v5M8 20v5"
    />
  </svg>
);

export default Barricade;
