import * as React from 'react';
import { SVGProps } from 'react';

const SvgChalkboardTeacher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#chalkboard-teacher_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M13 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M6.675 26a7 7 0 0 1 12.65 0H27a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1.675Z" />
      <path d="M22 22h2V10H8v2" />
    </g>
    <defs>
      <clipPath id="chalkboard-teacher_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChalkboardTeacher;
