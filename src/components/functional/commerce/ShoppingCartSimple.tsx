import * as React from 'react';
import { SVGProps } from 'react';

const ShoppingCartSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#shopping-cart-simple_svg__a)">
      <path
        fill="currentColor"
        d="M10 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.287 9h22.425l-3.3 11.55A1.987 1.987 0 0 1 22.489 22H10.511a1.988 1.988 0 0 1-1.925-1.45L4.064 4.725A1 1 0 0 0 3.1 4H1"
      />
    </g>
    <defs>
      <clipPath id="shopping-cart-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ShoppingCartSimple;
