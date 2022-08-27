import * as React from 'react';
import { SVGProps } from 'react';

const ProjectorScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#projector-screen_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 23V9m20 0v14m1-18H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM16 23v4m0 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 23h24"
      />
    </g>
    <defs>
      <clipPath id="projector-screen_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ProjectorScreen;
