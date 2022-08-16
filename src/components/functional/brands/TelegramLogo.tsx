import * as React from 'react';
import { SVGProps } from 'react';

const TelegramLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11 16.863 11.238 9.887a1 1 0 0 0 1.637-.525l4.7-20.525a1 1 0 0 0-1.337-1.15L4.162 13.613c-.925.362-.8 1.712.175 1.912L11 16.863Zm0 0L28.012 4.575"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.613 21.8-3.9 3.9A1 1 0 0 1 11 25v-8.137"
    />
  </svg>
);

export default TelegramLogo;
