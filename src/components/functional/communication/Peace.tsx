import * as React from 'react';
import { SVGProps } from 'react';

const SvgPeace = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-12v12m0-12 9.825 6.887M16 16l-9.825 6.887M16 16V4"
    />
  </svg>
);

export default SvgPeace;
