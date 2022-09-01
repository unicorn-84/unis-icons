import * as React from 'react';
import { SVGProps } from 'react';

const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#graph_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-4-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.787-13.738-1.575-3.525m8.938 4.213-3.3 1.1m3.788 6.113-4.276-3.326m-4.6.151-4.524 4.024"
      />
    </g>
    <defs>
      <clipPath id="graph_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGraph;
