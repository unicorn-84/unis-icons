import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderSimpleDotted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#folder-simple-dotted_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 10V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2L16 10m-5 16H4.925A.925.925 0 0 1 4 25.075V24m16 2h-4m12-7v6.113a.888.888 0 0 1-.887.887H25m-4-16h6a1 1 0 0 1 1 1v3M4 15v4"
      />
    </g>
    <defs>
      <clipPath id="folder-simple-dotted_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderSimpleDotted;
