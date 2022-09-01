import * as React from 'react';
import { SVGProps } from 'react';

const SvgPushPinSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#push-pin-slash_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 21-5 5M6 5l20 22M11.713 11.287l-.213.213s-3.463-1.738-7.175 1.262a1 1 0 0 0-.075 1.488l13.475 13.475a1.001 1.001 0 0 0 1.512-.1c.95-1.262 2.388-3.738 1.588-6.313m2.288-3.425 5.175-5.175a.998.998 0 0 0 0-1.425l-7.576-7.574a1 1 0 0 0-1.424 0L14.55 8.45"
      />
    </g>
    <defs>
      <clipPath id="push-pin-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPushPinSlash;
