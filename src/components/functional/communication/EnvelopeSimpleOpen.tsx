import * as React from 'react';
import { SVGProps } from 'react';

const SvgEnvelopeSimpleOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V12L16 4 4 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m28 12-9.813 7h-4.375L4 12"
    />
  </svg>
);

export default SvgEnvelopeSimpleOpen;
