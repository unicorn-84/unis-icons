import * as React from 'react';
import { SVGProps } from 'react';

const Cursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.775 6.062 7.275 19.4a1 1 0 0 0 1.875-.012l2.913-8.013a1.014 1.014 0 0 1 .6-.6l8.012-2.912a1 1 0 0 0 .013-1.875l-19.4-7.275a1 1 0 0 0-1.288 1.287v0Zm12.3 11.013L26 26"
    />
  </svg>
);

export default Cursor;
