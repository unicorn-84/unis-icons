import * as React from 'react';
import { SVGProps } from 'react';

const TagChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tag-chevron_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m23.3 24.55 5.325-8a.975.975 0 0 0 0-1.1l-5.325-8a.988.988 0 0 0-.838-.45H3l5.625 8.45a.975.975 0 0 1 0 1.1L3 25h19.462a.987.987 0 0 0 .838-.45v0Z"
      />
    </g>
    <defs>
      <clipPath id="tag-chevron_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TagChevron;
