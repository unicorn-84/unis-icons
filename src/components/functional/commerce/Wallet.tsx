import * as React from 'react';
import { SVGProps } from 'react';

const Wallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#wallet_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8v16a2 2 0 0 0 2 2h20a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H7a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h17"
      />
      <path
        fill="currentColor"
        d="M22.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="wallet_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Wallet;
