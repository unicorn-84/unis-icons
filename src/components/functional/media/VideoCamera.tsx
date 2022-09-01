import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#video-camera_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7.5h16a4 4 0 0 1 4 4v12a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-12a1 1 0 0 1 1-1v0ZM23 14l7-4v12l-7-4"
      />
    </g>
    <defs>
      <clipPath id="video-camera_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVideoCamera;
