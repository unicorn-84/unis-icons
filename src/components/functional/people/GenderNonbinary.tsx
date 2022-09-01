import * as React from 'react';
import { SVGProps } from 'react';

const SvgGenderNonbinary = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 29a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm4.462-20.5-8.925-6m0 6 8.925-6M16 12V5.5"
    />
  </svg>
);

export default SvgGenderNonbinary;
