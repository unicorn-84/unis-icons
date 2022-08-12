import * as React from 'react';
import { SVGProps } from 'react';

const Boat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6V3m12 17c-1.825 6.375-10.275 8.6-11.775 8.95a.912.912 0 0 1-.45 0C14.275 28.6 5.825 26.375 4 20v-4.275a1 1 0 0 1 .688-.95l11-3.675c.203-.063.42-.063.624 0l11 3.675a1 1 0 0 1 .688.95V20Zm-12 1v-9.95"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 14V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7"
    />
  </svg>
);

export default Boat;
