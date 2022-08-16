import * as React from 'react';
import { SVGProps } from 'react';

const YoutubeLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20 16-6-4v8l6-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 16c0 3.725.388 5.9.675 7.025a2.013 2.013 0 0 0 1.2 1.363C9.063 25.988 16 25.95 16 25.95s6.938.038 11.125-1.563a2.014 2.014 0 0 0 1.2-1.362C28.613 21.9 29 19.725 29 16c0-3.725-.387-5.9-.675-7.025a2.013 2.013 0 0 0-1.2-1.362C22.937 6.012 16 6.05 16 6.05S9.062 6.013 4.875 7.613a2.012 2.012 0 0 0-1.2 1.362C3.388 10.1 3 12.275 3 16Z"
    />
  </svg>
);

export default YoutubeLogo;
