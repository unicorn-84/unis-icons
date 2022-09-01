import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLinesUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15 16 3l12 12h-6v4H10v-4H4Zm18 12H10m12-4H10"
    />
  </svg>
);

export default SvgArrowFatLinesUp;
