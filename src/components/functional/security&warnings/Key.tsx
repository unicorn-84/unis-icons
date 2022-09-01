import * as React from 'react';
import { SVGProps } from 'react';

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.65 15.35A8.788 8.788 0 0 1 11 12a9 9 0 1 1 9 9 8.788 8.788 0 0 1-3.35-.65v0L15 22h-3v3H9v3H4v-5l7.65-7.65Z"
    />
    <path
      fill="currentColor"
      d="M22.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgKey;
