import * as React from 'react';
import { SVGProps } from 'react';

const Exam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#exam_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 27V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v20l-4-2-4 2-4-2-4 2-4-2-4 2Z" />
      <path d="m9 20 4-8 4 8m-7-2h6m3-2h5m-2.5-2.5v5" />
    </g>
    <defs>
      <clipPath id="exam_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Exam;
