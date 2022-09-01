import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandsClapping = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.475 15.238a2.251 2.251 0 0 0-3.9 2.25L7.2 25.5a9 9 0 0 0 15.588-9l-2.125-3.688a2.25 2.25 0 0 0-3.888 2.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.375 18.188-4.75-8.226a2.251 2.251 0 0 0-3.9 2.25l4.75 8.226m9.3-1.9-5.25-9.1a2.251 2.251 0 0 0-3.9 2.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.375 8.463-1.287-2.238a2.251 2.251 0 0 0-3.9 2.25l.3.513M23.5 23.938a9.012 9.012 0 0 0 1.762-11.175l-2.125-3.676a2.25 2.25 0 1 0-3.9 2.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.525 11.838-3.537-6.125a2.251 2.251 0 0 0-3.9 2.25M22.1 1.412l-.513 1.925m4.301-.162-1.15 1.637m4.087 1.3-1.637 1.15"
    />
  </svg>
);

export default SvgHandsClapping;
