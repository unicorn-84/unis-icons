import * as React from 'react';
import { SVGProps } from 'react';

const SvgMapTrifold = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 23-8 2V7l8-2m8 22-8-4V5l8 4v18Zm0-18 8-2v18l-8 2"
    />
  </svg>
);

export default SvgMapTrifold;
