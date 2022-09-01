import * as React from 'react';
import { SVGProps } from 'react';

const SvgTerminalWindow = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 12 5 4-5 4m7 0h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.938 6H5.063C4.476 6 4 6.476 4 7.063v17.875C4 25.523 4.476 26 5.063 26h21.875c.586 0 1.062-.476 1.062-1.063V7.063C28 6.476 27.524 6 26.937 6Z"
    />
  </svg>
);

export default SvgTerminalWindow;
