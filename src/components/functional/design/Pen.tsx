import * as React from 'react';
import { SVGProps } from 'react';

const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.588 27H6a1 1 0 0 1-1-1v-5.587a.987.987 0 0 1 .288-.7l15-15a1 1 0 0 1 1.424 0l5.576 5.574a1 1 0 0 1 0 1.425l-15 15a.987.987 0 0 1-.7.288v0ZM17 8l7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 24 5-5-1-4M5.063 20.063l6.875 6.875"
    />
  </svg>
);

export default SvgPen;
