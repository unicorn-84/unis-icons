import * as React from 'react';
import { SVGProps } from 'react';

const MagicWand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 16v6m-3-3h6M10.5 5v5M8 7.5h5M21 23v4m-2-2h4m.303-20.296L4.715 23.292a1 1 0 0 0 0 1.414l2.586 2.586a1 1 0 0 0 1.414 0L27.303 8.704a1 1 0 0 0 0-1.415l-2.585-2.585a1 1 0 0 0-1.415 0ZM18 10l4 4"
    />
  </svg>
);

export default MagicWand;
