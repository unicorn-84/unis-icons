import * as React from 'react';
import { SVGProps } from 'react';

const SvgSword = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.525 16.525 9.5-11.5L27 5l-.025 7.975-11.5 9.5M12.5 19.5 20 12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.262 24.688-3.737 3.737a1 1 0 0 1-1.413 0l-1.537-1.538a1 1 0 0 1 0-1.412l3.737-3.738a.999.999 0 0 0 0-1.424l-2.6-2.6a.999.999 0 0 1 0-1.425l1.575-1.575a1 1 0 0 1 1.426 0l9.575 9.575a1 1 0 0 1 0 1.424l-1.575 1.576a1 1 0 0 1-1.425 0l-2.6-2.6a1 1 0 0 0-1.426 0Z"
    />
  </svg>
);

export default SvgSword;
