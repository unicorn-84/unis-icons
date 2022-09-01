import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatTeardrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 27H5.963A.951.951 0 0 1 5 26.038V15.5A11.5 11.5 0 0 1 16.5 4v0A11.5 11.5 0 0 1 28 15.5v0A11.501 11.501 0 0 1 16.5 27v0Z"
    />
  </svg>
);

export default SvgChatTeardrop;
