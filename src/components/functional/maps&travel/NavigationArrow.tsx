import * as React from 'react';
import { SVGProps } from 'react';

const SvgNavigationArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.675 5.95 12 27.113c.313.912 1.613.887 1.9-.038l2.95-9.575a.937.937 0 0 1 .662-.65l9.563-2.95c.925-.287.95-1.588.038-1.9L5.95 4.675A1 1 0 0 0 4.675 5.95v0Z"
    />
  </svg>
);

export default SvgNavigationArrow;
