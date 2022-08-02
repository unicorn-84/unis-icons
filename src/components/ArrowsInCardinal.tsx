import * as React from 'react';
import { SVGProps } from 'react';

const ArrowsInCardinal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.538 23.538 16 20l-3.537 3.538M16 29v-9M12.463 8.462 16 12l3.538-3.538M16 3v9m-7.538 7.538L12 16l-3.538-3.537M3 16h9m11.538-3.537L20 16l3.538 3.538M29 16h-9"
    />
  </svg>
);

export default ArrowsInCardinal;
