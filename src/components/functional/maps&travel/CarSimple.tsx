import * as React from 'react';
import { SVGProps } from 'react';

const CarSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 15h28m-3 12h-3a1 1 0 0 1-1-1v-3H9v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V15l3.737-8.4A1 1 0 0 1 8.65 6h14.7a1 1 0 0 1 .912.6L28 15v11a1 1 0 0 1-1 1Z"
    />
  </svg>
);

export default CarSimple;
