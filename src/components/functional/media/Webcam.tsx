import * as React from 'react';
import { SVGProps } from 'react';

const SvgWebcam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#webcam_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M16 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 5v4M4 26h24" />
    </g>
    <defs>
      <clipPath id="webcam_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWebcam;
