import * as React from 'react';
import { SVGProps } from 'react';

const Dog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dog_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 24v3"
      />
      <path
        fill="currentColor"
        d="M11.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 22-2 2-2-2m5-16 6.975-1.737a1 1 0 0 1 1.225.774l2.05 10.95c.188 1.025-1.125 1.626-1.775.8L19 6Zm-6 0L6.025 4.263a1 1 0 0 0-1.225.774l-2.05 10.95c-.187 1.025 1.125 1.626 1.775.8L13 6Zm0 0h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26 14.912V23a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8.088"
      />
    </g>
    <defs>
      <clipPath id="dog_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Dog;
