import * as React from 'react';
import { SVGProps } from 'react';

const PushPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#push-pin_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 21-5 5M19.288 3.713 11.5 11.5s-3.463-1.737-7.175 1.262a1 1 0 0 0-.075 1.488l13.475 13.475a1 1 0 0 0 1.512-.1c1.05-1.387 2.7-4.262 1.263-7.125l7.788-7.787a.998.998 0 0 0 0-1.425l-7.576-7.575a1 1 0 0 0-1.424 0Z"
      />
    </g>
    <defs>
      <clipPath id="push-pin_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default PushPin;
