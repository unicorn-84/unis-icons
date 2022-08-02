import * as React from 'react';
import { SVGProps } from 'react';

const Ruler = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.29 3.705 3.707 20.287a1 1 0 0 0 0 1.414l6.585 6.586a1 1 0 0 0 1.415 0l16.581-16.582a1 1 0 0 0 0-1.414l-6.586-6.586a1 1 0 0 0-1.414 0ZM16.5 7.5l4 4M12 12l4 4m-8.5.5 4 4"
    />
  </svg>
);

export default Ruler;
