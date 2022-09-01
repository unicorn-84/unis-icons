import * as React from 'react';
import { SVGProps } from 'react';

const SvgDropHalf = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 18C26 9 16 2 16 2S6 9 6 18a10 10 0 0 0 20 0ZM16 28V2m0 14h9.837M16 12h8.575M16 20h9.8M16 24h8M16 8h6.125"
    />
  </svg>
);

export default SvgDropHalf;
