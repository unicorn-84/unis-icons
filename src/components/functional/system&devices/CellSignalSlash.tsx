import * as React from 'react';
import { SVGProps } from 'react';

const SvgCellSignalSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22m-9.075-15.925 6.362-6.363a1 1 0 0 1 1.713.7V19.95M26 27H3.412a1 1 0 0 1-.7-1.713L14.1 13.9"
    />
  </svg>
);

export default SvgCellSignalSlash;
