import * as React from 'react';
import { SVGProps } from 'react';

const CodepenLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M29 12.625 16 20 3 12.625l12.512-7.1a1.038 1.038 0 0 1 .976 0L29 12.625Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29 20.625-12.512 7.1a1.037 1.037 0 0 1-.976 0L3 20.625l13-7.375 13 7.375Zm0-8v8m-26-8v8M16 20v7.85M16 5.4v7.85"
    />
  </svg>
);

export default CodepenLogo;
