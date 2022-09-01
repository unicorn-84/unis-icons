import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatsTeardrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22H3.75a.75.75 0 0 1-.75-.75V13a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.512 22A9 9 0 0 0 20 28h8.25a.75.75 0 0 0 .75-.75V19a8.988 8.988 0 0 0-8.512-8.988"
    />
  </svg>
);

export default SvgChatsTeardrop;
