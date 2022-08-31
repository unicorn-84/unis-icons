import * as React from 'react';
import { SVGProps } from 'react';

const TagSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tag-simple_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24.3 24.55 30 16l-5.7-8.55a.988.988 0 0 0-.838-.45H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18.462a.987.987 0 0 0 .838-.45v0Z"
      />
    </g>
    <defs>
      <clipPath id="tag-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default TagSimple;
