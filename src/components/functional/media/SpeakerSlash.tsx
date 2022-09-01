import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#speaker-slash_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27.363 9.637a8.986 8.986 0 0 1 0 12.726M10 11v10m13.825-7.825a3.987 3.987 0 0 1 0 5.65M6 5l20 22m-7-7.7V28l-9-7H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6l.85-.662m3.175-2.463L19 4v9.35"
      />
    </g>
    <defs>
      <clipPath id="speaker-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpeakerSlash;
