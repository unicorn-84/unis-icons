import * as React from 'react';
import { SVGProps } from 'react';

const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.938 7H4.063C3.476 7 3 7.476 3 8.063v15.874C3 24.524 3.476 25 4.063 25h23.875c.586 0 1.062-.476 1.062-1.063V8.063C29 7.476 28.524 7 27.937 7ZM7 16h18M7 12h18M7 20h1m4 0h8m4 0h1"
    />
  </svg>
);

export default SvgKeyboard;
