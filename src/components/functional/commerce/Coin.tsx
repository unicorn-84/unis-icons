import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#coin_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 19c7.18 0 13-2.686 13-6s-5.82-6-13-6S3 9.686 3 13s5.82 6 13 6Zm0 0v6" />
      <path d="M3 13v6c0 3 5 6 13 6s13-3 13-6v-6m-5 4.762v6m-16-6v6" />
    </g>
    <defs>
      <clipPath id="coin_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCoin;
