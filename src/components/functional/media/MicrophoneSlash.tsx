import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrophoneSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#microphone-slash_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22.05 22.663A9 9 0 0 1 7.05 17" />
      <path d="M19.363 19.7A4.95 4.95 0 0 1 16 21v0a5 5 0 0 1-5-5v-5.5M16 25v4M6 5l20 22M11.75 5.375A4.975 4.975 0 0 1 16 3v0a5 5 0 0 1 5 5v7.55M24.95 17a9.05 9.05 0 0 1-.563 2.275" />
    </g>
    <defs>
      <clipPath id="microphone-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMicrophoneSlash;
