import * as React from 'react';
import { SVGProps } from 'react';

const AirplaneLanding = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 27h18M3 12.963V6.388a1 1 0 0 1 1.313-.95L6 6l2 3.75L12 11V6.388a1 1 0 0 1 1.313-.95L15 6l4 7 6.075 1.688A3.988 3.988 0 0 1 28 18.538V23L5.925 16.812A3.987 3.987 0 0 1 3 12.963v0Z"
    />
  </svg>
);

export default AirplaneLanding;
