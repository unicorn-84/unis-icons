import * as React from 'react';
import { SVGProps } from 'react';

const SmileySticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.525 27.475c-1.143.347-2.33.524-3.525.525a12 12 0 1 1 12-12c0 1.194-.178 2.382-.525 3.525l-7.95 7.95Z"
    />
    <path
      fill="currentColor"
      d="M11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.2 19a6.013 6.013 0 0 1-10.4 0"
    />
  </svg>
);

export default SmileySticker;
