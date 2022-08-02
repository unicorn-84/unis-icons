import * as React from 'react';
import { SVGProps } from 'react';

const ChatCentered = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.712 24.488-1.85 3.087a1.012 1.012 0 0 1-1.724 0l-1.85-3.087a.987.987 0 0 0-.85-.488H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7.438a.987.987 0 0 0-.85.488v0Z"
    />
  </svg>
);

export default ChatCentered;
