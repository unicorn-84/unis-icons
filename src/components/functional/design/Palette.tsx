import * as React from 'react';
import { SVGProps } from 'react';

const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.7 18.675c.207-.91.308-1.841.3-2.775C27.95 9.288 22.475 3.938 15.875 4A12 12 0 0 0 12 27.313a2.988 2.988 0 0 0 4-2.825V24a2.987 2.987 0 0 1 3-3h5.775a3 3 0 0 0 2.925-2.325v0Z"
    />
    <path
      fill="currentColor"
      d="M16 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-5.625 3.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11.25-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgPalette;
