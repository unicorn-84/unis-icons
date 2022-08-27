import * as React from 'react';
import { SVGProps } from 'react';

const Paperclip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#paperclip_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 10 9.588 20.587a2 2 0 0 0 2.825 2.826l12.412-12.588a4 4 0 0 0-5.65-5.65L6.763 17.762a5.993 5.993 0 1 0 8.475 8.476L25.5 16"
      />
    </g>
    <defs>
      <clipPath id="paperclip_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Paperclip;
