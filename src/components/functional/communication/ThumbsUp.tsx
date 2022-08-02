import * as React from 'react';
import { SVGProps } from 'react';

const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 13h6v13H4a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1v0Zm6 0 5-10a4 4 0 0 1 4 4v3h7.738a1.987 1.987 0 0 1 1.974 2.25l-1.5 12A2 2 0 0 1 25.238 26H10"
    />
  </svg>
);

export default ThumbsUp;
