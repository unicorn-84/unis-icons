import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserFocus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.5 5H26a1 1 0 0 1 1 1v3.5M22.5 27H26a1 1 0 0 0 1-1v-3.5M9.5 27H6a1 1 0 0 1-1-1v-3.5M9.5 5H6a1 1 0 0 0-1 1v3.5M16 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.362 22a7.513 7.513 0 0 1 13.275 0"
    />
  </svg>
);

export default SvgUserFocus;
