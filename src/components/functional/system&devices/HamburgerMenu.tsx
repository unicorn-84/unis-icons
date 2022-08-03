import * as React from 'react';
import { SVGProps } from 'react';

const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.333 8h21.334M5.333 16h21.334M5.333 24h21.334"
    />
  </svg>
);

export default HamburgerMenu;
