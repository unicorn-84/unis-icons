import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsOutCardinal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.538 25.462 16 29l-3.537-3.538M16 20v9M12.463 6.537 16 3l3.538 3.537M16 12V3M6.537 19.537 3 16l3.537-3.538M12 16H3m22.462-3.538L29 16l-3.538 3.537M20 16h9"
    />
  </svg>
);

export default ArrowsOutCardinal;
