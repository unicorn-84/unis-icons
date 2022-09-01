import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-video_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 4v7h7" />
      <path d="M22 28h3a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11" />
      <path d="M13 20H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Zm1 2.5 4-2v6.15l-4-2.15" />
    </g>
    <defs>
      <clipPath id="file-video_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileVideo;
