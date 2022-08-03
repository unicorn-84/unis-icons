import * as React from 'react';
import { SVGProps } from 'react';

const CellSignalFull = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 8v19m5-21.588V26a1 1 0 0 1-1 1H3.412a1 1 0 0 1-.7-1.713L23.287 4.712a1 1 0 0 1 1.713.7ZM15 13v14m-5-9v9"
    />
  </svg>
);

export default CellSignalFull;
