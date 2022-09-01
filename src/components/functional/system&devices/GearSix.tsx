import * as React from 'react';
import { SVGProps } from 'react';

const SvgGearSix = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.675 10.088c.301.43.564.886.787 1.362l3.238 1.8c.404 1.81.409 3.688.012 5.5l-3.25 1.8a9.188 9.188 0 0 1-.787 1.363l.063 3.712a13 13 0 0 1-4.763 2.763l-3.188-1.913a11.01 11.01 0 0 1-1.574 0l-3.175 1.9a12.823 12.823 0 0 1-4.775-2.75l.062-3.7a10.006 10.006 0 0 1-.787-1.375L3.3 18.75a12.75 12.75 0 0 1-.012-5.5l3.25-1.8c.223-.476.486-.932.787-1.362l-.062-3.713a13 13 0 0 1 4.762-2.762l3.188 1.912c.524-.037 1.05-.037 1.575 0l3.174-1.9a12.824 12.824 0 0 1 4.776 2.75l-.063 3.713Z"
    />
  </svg>
);

export default SvgGearSix;
