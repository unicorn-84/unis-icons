import * as React from 'react';
import { SVGProps } from 'react';

const Detective = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 26a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM13 22.5h6M1 15h30M5 15l6.162-8.8a1 1 0 0 1 1.65.012l2.35 3.538a1 1 0 0 0 1.675 0l2.35-3.538a1 1 0 0 1 1.65-.012L27 15"
    />
  </svg>
);

export default Detective;
