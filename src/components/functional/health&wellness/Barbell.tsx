import * as React from 'react';
import { SVGProps } from 'react';

const SvgBarbell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#barbell_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm13 0h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm1 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M7 22H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3m5 6h8m9 0h2M1 16h2"
      />
    </g>
    <defs>
      <clipPath id="barbell_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBarbell;
