import * as React from 'react';
import { SVGProps } from 'react';

const SvgDropHalfBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 18C26 9 16 2 16 2S6 9 6 18a10 10 0 0 0 20 0ZM6.163 16h19.675M6.2 20h19.6M8 24h16"
    />
  </svg>
);

export default SvgDropHalfBottom;
