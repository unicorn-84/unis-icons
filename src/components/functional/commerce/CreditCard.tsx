import * as React from 'react';
import { SVGProps } from 'react';

const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#credit-card_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M28 7H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-7 14h4m-10 0h2M3 12.113h26"
      />
    </g>
    <defs>
      <clipPath id="credit-card_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCreditCard;
