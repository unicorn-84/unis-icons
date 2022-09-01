import * as React from 'react';
import { SVGProps } from 'react';

const SvgGauge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 23v-2.862C3 12.95 8.775 7.025 15.95 7A13 13 0 0 1 29 20v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1ZM16 7v4M3.438 16.637l3.874 1.038m21.251-1.038-3.875 1.038M12.925 24l8.55-11.137"
    />
  </svg>
);

export default SvgGauge;
