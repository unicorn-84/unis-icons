import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoCameraSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#video-camera-slash_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m30 22-7-4v-4l7-4v12ZM4.362 3 28 29" />
      <path d="M13.863 7.5H22a1 1 0 0 1 1 1V18m0 5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h5.45" />
    </g>
    <defs>
      <clipPath id="video-camera-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVideoCameraSlash;
