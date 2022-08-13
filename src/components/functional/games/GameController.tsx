import * as React from 'react';
import { SVGProps } from 'react';

const GameController = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 13.5h4m-14 0h4m-2-2v4m10.5-8.537L10.5 7a6.513 6.513 0 0 0-6.4 5.375v0L2.05 22.887a3.5 3.5 0 0 0 5.925 3.088v0l5.4-5.975 8.125-.038a6.5 6.5 0 1 0 0-13v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m27.9 12.338 2.05 10.55a3.5 3.5 0 0 1-5.925 3.087v0l-5.4-6"
    />
  </svg>
);

export default GameController;
