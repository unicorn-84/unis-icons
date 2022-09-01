import * as React from 'react';
import { SVGProps } from 'react';

const SvgPokerChip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-14V4m-4.95 7.05L7.513 7.513M9 16H4m7.05 4.95-3.537 3.538M16 23v5m4.95-7.05 3.538 3.538M23 16h5m-7.05-4.95 3.538-3.537"
    />
  </svg>
);

export default SvgPokerChip;
