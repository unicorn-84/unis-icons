import * as React from 'react';
import { SVGProps } from 'react';

const SvgAtom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#atom_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26.256 26.253c2.147-2.148-.702-8.48-6.364-14.142C14.229 6.448 7.897 3.599 5.748 5.747c-2.148 2.148.702 8.48 6.364 14.142 5.663 5.663 11.995 8.512 14.143 6.364Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.892 19.89c5.662-5.664 8.511-11.995 6.364-14.143-2.148-2.148-8.48.701-14.143 6.364-5.662 5.662-8.512 11.994-6.364 14.142 2.148 2.148 8.48-.701 14.143-6.364Z"
      />
      <path
        fill="currentColor"
        d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="atom_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAtom;
