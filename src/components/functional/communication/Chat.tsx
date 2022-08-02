import * as React from 'react';
import { SVGProps } from 'react';

const Chat = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.675 25.238-4.038 3.375A1 1 0 0 1 4 27.85V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10.312a.975.975 0 0 0-.637.238v0Z"
    />
  </svg>
);

export default Chat;
