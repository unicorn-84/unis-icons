import * as React from 'react';
import { SVGProps } from 'react';

const SvgCameraRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#camera-rotate_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 26H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4l2-3h8l2 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z" />
      <path d="m21.5 15-1.962-2.037a5.012 5.012 0 0 0-7.075 0m7.075 7.075a5.013 5.013 0 0 1-7.075 0L10.5 18" />
      <path d="m22 12-.5 3-3 .5m-5 2-3 .5-.5 3" />
    </g>
    <defs>
      <clipPath id="camera-rotate_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCameraRotate;
