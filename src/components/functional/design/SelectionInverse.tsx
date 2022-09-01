import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelectionInverse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 27h4M5 14v4m4 9H6a1 1 0 0 1-1-1v-3m18 4h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3m.288-3.712 21.425 21.425"
    />
  </svg>
);

export default SvgSelectionInverse;
