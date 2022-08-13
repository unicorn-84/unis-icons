import * as React from 'react';
import { SVGProps } from 'react';

const CrownSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.638 24.5a1.013 1.013 0 0 0 1.25.738 34.125 34.125 0 0 1 18.212 0 1.012 1.012 0 0 0 1.25-.738l3.188-13.537a1 1 0 0 0-1.375-1.15l-6.326 2.812a1.013 1.013 0 0 1-1.287-.425l-3.675-6.625a1 1 0 0 0-1.75 0L11.45 12.2a1.012 1.012 0 0 1-1.287.425L3.837 9.813a1 1 0 0 0-1.375 1.15L5.638 24.5Z"
    />
  </svg>
);

export default CrownSimple;
