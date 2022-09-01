import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerSimpleSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#speaker-simple-slash_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24 13v6m4-8v10M6 5l20 22M14.025 7.875 19 4v9.35m0 5.95V28l-9-7H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h7.45"
      />
    </g>
    <defs>
      <clipPath id="speaker-simple-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpeakerSimpleSlash;
